import { NavLink, useLocation } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const sidebarSections = [
  {
    title: "General",
    items: [
      { id: "introduction", label: "Introduction", path: "/quickstart/introduction" },
    ],
  },
  {
    title: "Install / Update / Uninstall",
    collapsible: true,
    defaultOpen: true,
    items: [
      { id: "install", label: "Install", path: "/quickstart/install" },
      { id: "update", label: "Update", path: "/quickstart/update" },
      { id: "uninstall", label: "Uninstall", path: "/quickstart/uninstall" },
    ],
  },
  {
    title: "Usage",
    items: [
      { id: "configuration", label: "Configuration", path: "/quickstart/configuration" },
      { id: "usage", label: "Usage", path: "/quickstart/usage" },
    ],
  },
  {
    title: "Help",
    items: [
      { id: "troubleshooting", label: "Troubleshooting / FAQ", path: "/quickstart/troubleshooting" },
    ],
  },
];

interface Props {
  onNavigate?: () => void;
}

export function QuickStartSidebar({ onNavigate }: Props) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (title: string) =>
    setCollapsed((prev) => ({ ...prev, [title]: !prev[title] }));

  const isCollapsed = (section: typeof sidebarSections[0]) => {
    if (!section.collapsible) return false;
    if (collapsed[section.title] !== undefined) return collapsed[section.title];
    return !section.defaultOpen;
  };

  return (
    <nav className="space-y-6">
      {sidebarSections.map((section) => {
        const sectionCollapsed = isCollapsed(section);
        return (
          <div key={section.title}>
            <button
              onClick={() => section.collapsible && toggle(section.title)}
              className={`flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-2 px-2 ${
                section.collapsible ? "cursor-pointer" : "cursor-default"
              }`}
            >
              {section.title}
              {section.collapsible && (
                sectionCollapsed
                  ? <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200" />
                  : <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200" />
              )}
            </button>
            {!sectionCollapsed && (
              <ul className="space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
                      onClick={onNavigate}
                      className={({ isActive }) =>
                        `block w-full text-left px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
                          isActive
                            ? "text-primary bg-primary/10 font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:shadow-[0_0_12px_-4px_hsl(var(--primary)/0.15)]"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}
