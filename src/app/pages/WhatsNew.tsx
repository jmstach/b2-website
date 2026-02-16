import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { LegalLayout } from "./LegalLayout";

interface ReleaseEntry {
  version: string;
  date: string;
  sections: { heading: string; items: string[] }[];
}

function parseReleases(markdown: string): ReleaseEntry[] {
  const entries: ReleaseEntry[] = [];
  let current: ReleaseEntry | null = null;
  let currentSection: { heading: string; items: string[] } | null = null;

  for (const line of markdown.split("\n")) {
    // Version heading: ## 0.2.7 — 2026-02-15
    const versionMatch = line.match(/^## (.+?) — (.+)$/);
    if (versionMatch) {
      if (current) entries.push(current);
      current = { version: versionMatch[1], date: versionMatch[2], sections: [] };
      currentSection = null;
      continue;
    }

    // Section heading: ### New, ### Fixed
    const sectionMatch = line.match(/^### (.+)$/);
    if (sectionMatch && current) {
      currentSection = { heading: sectionMatch[1], items: [] };
      current.sections.push(currentSection);
      continue;
    }

    // Bullet item: - Description here
    const itemMatch = line.match(/^- (.+)$/);
    if (itemMatch && currentSection) {
      currentSection.items.push(itemMatch[1]);
    }
  }

  if (current) entries.push(current);
  return entries;
}

export function WhatsNew() {
  const [releases, setReleases] = useState<ReleaseEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();
  const hasScrolled = useRef(false);

  useEffect(() => {
    fetch("/releases.md")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load release notes");
        return res.text();
      })
      .then((text) => {
        setReleases(parseReleases(text));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Scroll to hash (version anchor) after releases load
  useEffect(() => {
    if (releases.length > 0 && location.hash && !hasScrolled.current) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        hasScrolled.current = true;
      }
    }
  }, [releases, location.hash]);

  if (loading) {
    return (
      <LegalLayout>
        <h1>What's New</h1>
        <p className="text-muted-foreground">Loading...</p>
      </LegalLayout>
    );
  }

  if (error) {
    return (
      <LegalLayout>
        <h1>What's New</h1>
        <p className="text-muted-foreground">Could not load release notes.</p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout>
      <h1>What's New</h1>
      <p className="text-muted-foreground">
        Release notes for B2. See what's changed in each version.
      </p>
      {releases.map((release) => (
        <section key={release.version} id={release.version} className="mt-10">
          <h2>
            {release.version}{" "}
            <span className="text-muted-foreground font-normal text-base">
              — {release.date}
            </span>
          </h2>
          {release.sections.map((section) => (
            <div key={section.heading}>
              <h3>{section.heading}</h3>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </LegalLayout>
  );
}
