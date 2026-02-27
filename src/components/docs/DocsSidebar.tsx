import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface SidebarSection {
  title: string;
  items: { id: string; label: string }[];
}

const sections: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      { id: "overview", label: "Overview" },
      { id: "installing", label: "Installing" },
    ],
  },
  {
    title: "Installation",
    items: [
      { id: "automated-installation", label: "Automated Installation" },
      { id: "manual-installation", label: "Manual Installation" },
    ],
  },
  {
    title: "Configuration",
    items: [
      { id: "forks", label: "Forks" },
      { id: "post-installation", label: "Post Installation" },
    ],
  },
  {
    title: "Maintenance",
    items: [
      { id: "updating", label: "Updating" },
      { id: "uninstalling", label: "Uninstalling" },
    ],
  },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

interface DocsSidebarProps {
  activeId: string;
}

export function DocsSidebar({ activeId }: DocsSidebarProps) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (title: string) =>
    setCollapsed((prev) => ({ ...prev, [title]: !prev[title] }));

  const isActive = (id: string) => activeId === id;

  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-border/30">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 px-4">
        <nav className="space-y-6">
          {sections.map((section) => {
            const isCollapsed = collapsed[section.title];
            const hasActive = section.items.some((i) => isActive(i.id));

            return (
              <div key={section.title}>
                <button
                  onClick={() => toggle(section.title)}
                  className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-2 px-2"
                >
                  {section.title}
                  <ChevronRight
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      !isCollapsed ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {!isCollapsed && (
                  <ul className="space-y-0.5">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToId(item.id)}
                          className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
                            isActive(item.id)
                              ? "text-primary bg-primary/10 font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
