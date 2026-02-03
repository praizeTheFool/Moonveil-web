import { NavLink } from "react-router-dom";
import { Moon } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/install", label: "Install" },
  { to: "/links", label: "Links" },
];

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

        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
