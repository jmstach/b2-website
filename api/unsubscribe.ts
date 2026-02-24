import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { createHmac } from "crypto";

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

const BUCKET = process.env.R2_BUCKET_NAME!;

interface EmailEntry {
  email: string;
  source: string;
  timestamp: string;
  subscribed: boolean;
}

function verifyToken(email: string, token: string): boolean {
  const expected = createHmac("sha256", process.env.UNSUBSCRIBE_SECRET!)
    .update(email.toLowerCase())
    .digest("hex");
  return expected === token;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const email = req.query.email as string;
  const token = req.query.token as string;

  if (!email) {
    return res.status(400).send(html("Missing email parameter."));
  }

  if (!token || !verifyToken(email, token)) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(403).send(html("Invalid or expired unsubscribe link."));
  }

  try {
    let entries: EmailEntry[] = [];
    try {
      const obj = await s3.send(
        new GetObjectCommand({ Bucket: BUCKET, Key: "emails.json" })
      );
      const body = await obj.Body?.transformToString();
      entries = body ? JSON.parse(body) : [];
    } catch {
      entries = [];
    }

    const entry = entries.find(
      (e) => e.email.toLowerCase() === email.toLowerCase()
    );

    if (entry) {
      entry.subscribed = false;
      await s3.send(
        new PutObjectCommand({
          Bucket: BUCKET,
          Key: "emails.json",
          Body: JSON.stringify(entries, null, 2),
          ContentType: "application/json",
        })
      );
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(200).send(
      html("You've been unsubscribed. You won't receive any more emails from B2.")
    );
  } catch (err) {
    console.error("Unsubscribe error:", err);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(500).send(
      html("Something went wrong. Please try again later.")
    );
  }
}

function html(message: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Unsubscribe — B2</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: #f5f5f7;
      color: #1d1d1f;
    }
    .card {
      text-align: center;
      max-width: 400px;
      padding: 48px 32px;
    }
    h1 { font-size: 20px; font-weight: 600; margin-bottom: 8px; }
    p { color: #6e6e73; font-size: 15px; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="card">
    <h1>B2</h1>
    <p>${message}</p>
  </div>
</body>
</html>`;
}
