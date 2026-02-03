import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-8">
      {/* Main footer row (unchanged) */}
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          Moonveil crafted in quiet.
        </p>

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

      {/* Separate centered copyright */}
      <p className="mt-6 text-center text-xs text-muted-foreground/70">
        Copyright © 2026 Rahul.
      </p>
    </footer>
  );
}
