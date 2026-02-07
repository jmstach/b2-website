import { LegalLayout } from "./LegalLayout";

export function PrivacyPolicy() {
  return (
    <LegalLayout>
      <h1>Privacy policy</h1>
      <p className="text-muted-foreground"><strong>Last updated:</strong> 7 February 2026</p>
      <p>B2 is developed by Justin Stach ("we", "us", "our"), based in the United Kingdom. This privacy policy explains what information we collect when you use the B2 application and the b2.stach.ltd website, and how we handle that information.</p>
      <p>We are committed to protecting your privacy. B2 is designed as a local-first application — your spreadsheet data never leaves your device unless you explicitly choose to export or sync it yourself.</p>

      <h2>The B2 application</h2>

      <h3>Data that stays on your device</h3>
      <p>B2 stores all spreadsheet data locally on your Mac in the <code>~/Documents/B2/</code> directory. We have no access to your files, formulas, or any content you create in B2. Your data is yours — we never collect, transmit, or process it.</p>
      <p>Application preferences are stored locally in <code>~/Library/Application Support/B2/</code> and are not transmitted to us or any third party.</p>

      <h3>Licence validation</h3>
      <p>B2 validates your licence key with Polar (Polar Software Inc.), our merchant of record, when the application is launched. This request transmits your licence key and may expose your IP address to Polar's servers. No other personal data is sent by B2 during this process. Polar's handling of this data is governed by <a href="https://polar.sh/legal/privacy" target="_blank" rel="noopener noreferrer">Polar's privacy policy</a>.</p>

      <h3>Update checks</h3>
      <p>B2 periodically checks for software updates using the Sparkle framework. When this happens, a request is made to our update server, which may log your IP address and basic request metadata (such as the time of the request). If you have opted in to sending anonymous system profile information, Sparkle may also transmit details such as your macOS version, CPU type, and application version. This information is used solely to help us understand which platforms to support. You can disable automatic update checks in B2's preferences.</p>

      <h3>No telemetry or analytics</h3>
      <p>Other than the licence validation and optional update checks described above, the B2 application does not contain any analytics, telemetry, crash reporting, or tracking of any kind.</p>

      <h2>The b2.stach.ltd website</h2>

      <h3>Analytics</h3>
      <p>We use Vercel Web Analytics to understand how visitors use our website. Vercel Analytics does not use cookies and does not collect personal identifiers that could track you across websites. The following aggregated data points may be recorded with each page view: the page URL, referrer, approximate geolocation (country and city, derived from IP address), device type, operating system, and browser. This data is aggregated and cannot be used to identify individual visitors. For more information, see <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel's analytics privacy policy</a>.</p>

      <h3>Purchases and payment</h3>
      <p>B2 is sold through Polar (Polar Software Inc.), which acts as our merchant of record. When you purchase B2, Polar collects and processes your payment information (such as your name, email address, billing address, and payment details) on our behalf. Polar uses Stripe as its underlying payment processor. We do not directly receive or store your full payment card details.</p>
      <p>Polar also handles international sales tax, VAT, and GST as part of its merchant of record service. The data Polar collects during the purchase process is governed by <a href="https://polar.sh/legal/privacy" target="_blank" rel="noopener noreferrer">Polar's privacy policy</a> and <a href="https://polar.sh/legal/terms" target="_blank" rel="noopener noreferrer">Polar's terms of use</a>.</p>

      <h3>Downloads</h3>
      <p>Application downloads are served via Cloudflare. When you download B2, Cloudflare may process your IP address and basic request metadata as part of delivering the file. This processing is governed by <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare's privacy policy</a>. We do not operate additional logging of individual downloads.</p>

      <h3>Cookies</h3>
      <p>The b2.stach.ltd website does not set any first-party cookies. Third-party services (Vercel, Cloudflare) may set strictly necessary cookies as part of their infrastructure. We do not use cookies for advertising, tracking, or profiling.</p>

      <h2>Lawful basis for processing</h2>
      <p>Under the UK General Data Protection Regulation (UK GDPR), we rely on the following lawful bases:</p>
      <ul>
        <li><strong>Contract performance</strong> (Article 6(1)(b)) — for processing licence keys during validation, which is necessary to deliver the software you have purchased.</li>
        <li><strong>Legitimate interests</strong> (Article 6(1)(f)) — for processing IP addresses during update checks and file downloads, where this is necessary to deliver the service and maintain security. We have assessed that this processing is proportionate and does not override your rights.</li>
        <li><strong>Legitimate interests</strong> (Article 6(1)(f)) — for website analytics, to understand how our website is used and to improve it.</li>
      </ul>

      <h2>Data sharing</h2>
      <p>We do not sell, rent, or trade your personal data. Data may be processed by the following third-party service providers solely in connection with the services described above:</p>
      <ul>
        <li><strong>Polar Software Inc.</strong> (merchant of record, payment processing, and licence validation) — <a href="https://polar.sh/legal/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a></li>
        <li><strong>Vercel</strong> (website hosting and analytics) — <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a></li>
        <li><strong>Cloudflare</strong> (content delivery and download hosting) — <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">privacy policy</a></li>
      </ul>

      <h2>International transfers</h2>
      <p>Some of our service providers (Polar, Vercel, Cloudflare) may process data outside the United Kingdom. Where this occurs, appropriate safeguards are in place, including standard contractual clauses and adequacy decisions recognised under UK data protection law.</p>

      <h2>Data retention</h2>
      <p>We do not maintain any database of user information. Server logs that may contain IP addresses are retained only for as long as is necessary for operational and security purposes, typically no longer than 30 days, after which they are automatically deleted. Payment and transaction records are retained by Polar in accordance with their own retention policies and applicable legal obligations.</p>

      <h2>Your rights</h2>
      <p>Under the UK GDPR, you have the following rights in relation to any personal data we process:</p>
      <ul>
        <li>The right to access your personal data</li>
        <li>The right to rectification of inaccurate data</li>
        <li>The right to erasure ("right to be forgotten")</li>
        <li>The right to restrict processing</li>
        <li>The right to data portability</li>
        <li>The right to object to processing based on legitimate interests</li>
      </ul>
      <p>Given the minimal data we collect, in most cases there will be no personal data for us to provide, correct, or delete. For requests relating to payment data held by Polar, you may need to contact Polar directly at support@polar.sh. If you wish to exercise any of these rights with us, please contact us at the address below.</p>
      <p>You also have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's supervisory authority for data protection. You can contact the ICO at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>

      <h2>Children's privacy</h2>
      <p>B2 is not directed at children under 13, and we do not knowingly collect personal data from children.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated "last updated" date. We encourage you to review this policy periodically.</p>

      <h2>Contact</h2>
      <p>If you have any questions about this privacy policy or our data practices, please contact me at <a href="mailto:justin@stach.ltd">justin@stach.ltd</a></p>
    </LegalLayout>
  );
}
