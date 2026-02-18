import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

export function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
        <article className="prose">
          {children}
        </article>
        <footer className="mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <div>&copy; 2026 Stach LTD. Crafted with care in London.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/whats-new" className="hover:text-foreground transition-colors">Release notes</Link>
          </div>
        </footer>
      </div>
      <Analytics />
    </main>
  );
}
