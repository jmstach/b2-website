import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { Resend } from "resend";
import { Redis } from "@upstash/redis";
import { createHmac } from "crypto";

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

const resend = new Resend(process.env.RESEND_API_KEY);
const BUCKET = process.env.R2_BUCKET_NAME!;
const FROM = process.env.RESEND_FROM_EMAIL || "B2 <hello@stach.ltd>";

interface EmailEntry {
  email: string;
  source: string;
  timestamp: string;
  subscribed: boolean;
}

async function readEmails(): Promise<EmailEntry[]> {
  try {
    const res = await s3.send(
      new GetObjectCommand({ Bucket: BUCKET, Key: "emails.json" })
    );
    const body = await res.Body?.transformToString();
    return body ? JSON.parse(body) : [];
  } catch {
    return [];
  }
}

async function writeEmails(entries: EmailEntry[]): Promise<void> {
  await s3.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: "emails.json",
      Body: JSON.stringify(entries, null, 2),
      ContentType: "application/json",
    })
  );
}

function signEmail(email: string): string {
  return createHmac("sha256", process.env.UNSUBSCRIBE_SECRET!)
    .update(email.toLowerCase())
    .digest("hex");
}

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_IP = 5;
const RATE_LIMIT_EMAIL = 2;
const RATE_LIMIT_WINDOW = 3600; // 1 hour in seconds

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, source } = req.body ?? {};

  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const validSources = ["hero_mobile", "hero_mobile_list", "deepdive_mobile", "deepdive_mobile_list", "deepdive_desktop_list", "footer_list"];
  if (!validSources.includes(source)) {
    return res.status(400).json({ error: "Invalid source" });
  }

  // Rate limit by IP
  const ip =
    (Array.isArray(req.headers["x-forwarded-for"])
      ? req.headers["x-forwarded-for"][0]
      : req.headers["x-forwarded-for"]?.split(",")[0]?.trim()) || "unknown";

  const ipKey = `rate:ip:${ip}`;
  const ipCount = await redis.incr(ipKey);
  if (ipCount === 1) await redis.expire(ipKey, RATE_LIMIT_WINDOW);
  if (ipCount > RATE_LIMIT_IP) {
    return res.status(429).json({ error: "Too many requests. Try again later." });
  }

  // Rate limit by email
  const emailKey = `rate:email:${email.toLowerCase()}`;
  const emailCount = await redis.incr(emailKey);
  if (emailCount === 1) await redis.expire(emailKey, RATE_LIMIT_WINDOW);
  if (emailCount > RATE_LIMIT_EMAIL) {
    const message =
      source === "hero_mobile" || source === "deepdive_mobile"
        ? "We already sent your download link — check your inbox."
        : "You're already on the list!";
    return res.status(429).json({ error: message });
  }

  try {
    const entries = await readEmails();
    const existing = entries.find(
      (e) => e.email.toLowerCase() === email.toLowerCase()
    );

    if (!existing) {
      entries.push({
        email: email.toLowerCase(),
        source,
        timestamp: new Date().toISOString(),
        subscribed: true,
      });
      await writeEmails(entries);
    }

    if (source === "hero_mobile" || source === "deepdive_mobile") {
      const normalizedEmail = email.toLowerCase();
      const token = signEmail(normalizedEmail);
      const unsubscribeUrl = `https://b2.stach.ltd/api/unsubscribe?email=${encodeURIComponent(normalizedEmail)}&token=${token}`;

      const { error: sendError } = await resend.emails.send({
        from: FROM,
        to: email,
        subject: "Your B2 download link",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="font-size: 24px; font-weight: 600; color: #1d1d1f; margin-bottom: 16px;">Here's your B2 download link</h1>
            <p style="color: #6e6e73; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
              Open this email on your Mac and click the button below to download B2.
            </p>
            <a href="https://storage.stach.ltd/releases/B2-latest.dmg"
               style="display: inline-block; background: #0071e3; color: white; padding: 14px 28px; border-radius: 980px; font-size: 16px; font-weight: 500; text-decoration: none;">
              Download B2 for Mac
            </a>
            <p style="color: #86868b; font-size: 13px; line-height: 1.5; margin-top: 32px;">
              Free for 7 days, then $6.99 one-time purchase. No subscriptions.
            </p>
            <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0 16px;" />
            <p style="color: #86868b; font-size: 11px;">
              <a href="${unsubscribeUrl}" style="color: #86868b;">Unsubscribe</a>
            </p>
          </div>
        `,
      });

      if (sendError) {
        console.error("Resend error:", sendError);
        return res.status(502).json({ error: "Failed to send email" });
      }
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email API error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
