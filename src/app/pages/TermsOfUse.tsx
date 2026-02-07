import { LegalLayout } from "./LegalLayout";

export function TermsOfUse() {
  return (
    <LegalLayout>
      <h1>Terms of use</h1>
      <p className="text-muted-foreground"><strong>Last updated:</strong> 7 February 2026</p>
      <p>These terms of use ("Terms") govern your use of the B2 application and the b2.stach.ltd website (together, the "Service"), provided by Justin Stach ("we", "us", "our"), based in the United Kingdom.</p>
      <p>By downloading, installing, or using B2, you agree to be bound by these Terms. If you do not agree, please do not use the Service.</p>

      <h2>Licence</h2>
      <p>We grant you a non-exclusive, non-transferable, revocable licence to use B2 on up to two (2) Mac computers that you own or control, for personal or commercial purposes, subject to these Terms.</p>
      <p>You may not:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the application, except to the extent permitted by applicable law</li>
        <li>Redistribute, sublicence, or resell the application</li>
        <li>Remove or alter any proprietary notices or labels</li>
        <li>Use the application in any way that violates applicable law</li>
      </ul>

      <h2>Licence validation</h2>
      <p>B2 requires a valid licence key to operate. The application communicates with Polar's servers on launch to validate your licence. An active internet connection is required for this validation. If validation fails (for example, due to a revoked or invalid key), access to B2 may be restricted. We will make reasonable efforts to ensure that temporary network outages do not disrupt your use of the application.</p>

      <h2>Payment and refunds</h2>
      <p>B2 is sold as a one-time purchase through Polar (Polar Software Inc.), which acts as the merchant of record for all transactions. Polar handles payment processing, invoicing, and applicable sales taxes (including VAT and GST) on our behalf, using Stripe as its underlying payment processor. By purchasing B2, you also agree to <a href="https://polar.sh/legal/terms" target="_blank" rel="noopener noreferrer">Polar's terms of use</a>.</p>
      <p>If you are a consumer in the United Kingdom, you have statutory rights under the Consumer Rights Act 2015 in relation to digital content. If B2 is faulty or not as described, you may be entitled to a repair, replacement, or refund. These statutory rights are not affected by anything in these Terms.</p>
      <p>If you have any issues with your purchase, please contact us and we will work with you to resolve them.</p>

      <h2>Intellectual property</h2>
      <p>B2, including its design, code, icons, and documentation, is the intellectual property of Justin Stach. All rights not expressly granted in these Terms are reserved.</p>
      <p>The B2 file format (.b2) is JSON-based. Files you create using B2 belong to you — we claim no ownership or rights over your data or content.</p>

      <h2>Your data</h2>
      <p>B2 is a local-first application. Your spreadsheet data is stored on your device and is not transmitted to us. You are solely responsible for backing up your data. For full details of how we handle information, please see our <a href="/privacy">privacy policy</a>.</p>

      <h2>Availability and updates</h2>
      <p>We may release updates to B2 from time to time, which may include bug fixes, new features, or changes to existing functionality. Updates are delivered via the Sparkle framework and are optional unless a critical security issue requires immediate action.</p>
      <p>We do not guarantee that B2 will be available, uninterrupted, or error-free at all times. We may discontinue or modify the Service at any time, though we will make reasonable efforts to provide notice of any significant changes.</p>

      <h2>Disclaimer of warranties</h2>
      <p>To the maximum extent permitted by law, B2 is provided "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
      <p><strong>Nothing in these Terms excludes or limits your statutory rights as a consumer under English law, including your rights under the Consumer Rights Act 2015.</strong> Digital content must be of satisfactory quality, fit for a particular purpose, and as described.</p>

      <h2>Limitation of liability</h2>
      <p>To the maximum extent permitted by applicable law:</p>
      <ul>
        <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of profits, or business interruption, arising out of or in connection with your use of B2.</li>
        <li>Our total aggregate liability to you for any claims arising out of or relating to these Terms or your use of B2 shall not exceed the amount you paid for the application.</li>
      </ul>
      <p><strong>Nothing in these Terms excludes or limits our liability for:</strong></p>
      <ul>
        <li>Death or personal injury caused by our negligence</li>
        <li>Fraud or fraudulent misrepresentation</li>
        <li>Any other liability that cannot be excluded or limited under English law</li>
      </ul>

      <h2>Indemnification</h2>
      <p>You agree to indemnify and hold us harmless from any claims, losses, or damages (including reasonable legal fees) arising from your breach of these Terms or your misuse of the Service.</p>

      <h2>Third-party services</h2>
      <p>B2 interacts with the following third-party services: Polar (for payment processing and licence validation), Cloudflare (for downloads), and Sparkle (for updates). Your use of these services is subject to their respective terms and privacy policies. We are not responsible for the practices of third-party services.</p>

      <h2>Changes to these Terms</h2>
      <p>We may update these Terms from time to time. Any changes will be posted on this page with an updated "last updated" date. Your continued use of B2 after changes are posted constitutes your acceptance of the revised Terms. If we make material changes, we will make reasonable efforts to notify you (for example, via the website or an in-app notice).</p>

      <h2>Termination</h2>
      <p>We may terminate or suspend your licence to use B2 if you breach these Terms. Upon termination, you must cease all use of the application and delete any copies in your possession.</p>
      <p>Termination does not affect any rights or obligations that accrued before the termination date. The sections on intellectual property, limitation of liability, indemnification, and governing law survive termination.</p>

      <h2>Governing law and jurisdiction</h2>
      <p>These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
      <p>If you are a consumer, this does not affect any mandatory consumer protection laws that apply in your country of residence.</p>

      <h2>Severability</h2>
      <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.</p>

      <h2>Entire agreement</h2>
      <p>These Terms, together with our privacy policy, constitute the entire agreement between you and us regarding your use of B2, and supersede any prior agreements or understandings.</p>

      <h2>Contact</h2>
      <p>If you have any questions about these Terms, please contact us.</p>
    </LegalLayout>
  );
}
