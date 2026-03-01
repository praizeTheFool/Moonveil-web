import { NavLink } from "react-router-dom";
import { Moon, Github } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <NavLink 
          to="/" 
          className="flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-80"
        >
          <Moon className="h-5 w-5 text-primary" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Moonveil
          </span>
        </NavLink>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/notcandy001/Moonveil"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
