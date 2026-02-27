import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          Moonveil — crafted in quiet.
        </p>
        <span className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary/15 hover:border-primary/30 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]">
          © 2026 Rhaul
        </span>
        <a
          href="https://github.com/notcandy001/Moonveil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Github className="h-4 w-4" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}
