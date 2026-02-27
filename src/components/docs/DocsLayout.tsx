import { ReactNode, useEffect, useState } from "react";
import { DocsSidebar } from "./DocsSidebar";
import { DocsTableOfContents } from "./DocsTableOfContents";
import { DocsHeader } from "./DocsHeader";

interface DocsLayoutProps {
  children: ReactNode;
  headings: { id: string; text: string; level: number }[];
}

export function DocsLayout({ children, headings }: DocsLayoutProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-glow-gradient opacity-30 animate-glow-pulse" />
      </div>

      <DocsHeader />

      <div className="flex flex-1 pt-16">
        {/* Left Sidebar */}
        <DocsSidebar activeId={activeId} />

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="mx-auto max-w-[800px] px-6 py-12 lg:px-8 animate-fade-in-up">
            {children}
          </div>
        </main>

        {/* Right TOC */}
        <DocsTableOfContents headings={headings} activeId={activeId} />
      </div>

      {/* Footer */}
      <footer className="border-t border-border/30 py-6">
        <div className="container flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-sm text-muted-foreground">Moonveil — crafted in quiet.</p>
          <span className="inline-flex items-center rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
            © 2026 Rhaul
          </span>
        </div>
      </footer>
    </div>
  );
}
