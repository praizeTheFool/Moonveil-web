import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, Menu, X, Info, AlertTriangle, Lightbulb } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { CodeBlock } from "@/components/docs/CodeBlock";

const sidebarSections = [
  {
    title: "General",
    items: [
      { id: "introduction", label: "Introduction" },
    ],
  },
  {
    title: "Install / Update / Uninstall",
    collapsible: true,
    defaultOpen: true,
    items: [
      { id: "automated-install", label: "Automated Install" },
      { id: "manual-install", label: "Manual Install" },
      { id: "post-installation", label: "Post Installation" },
      { id: "updating", label: "Updating" },
      { id: "uninstall", label: "Uninstall" },
    ],
  },
  {
    title: "Usage",
    items: [
      { id: "configuration", label: "Configuration" },
    ],
  },
  {
    title: "Community",
    items: [
      { id: "fork-arrangement", label: "Fork Arrangement" },
    ],
  },
  {
    title: "Help",
    items: [
      { id: "troubleshooting", label: "Troubleshooting / FAQ" },
    ],
  },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ── Directed color blocks ── */

function AutomatedBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-primary/25 bg-primary/5 p-5"
         style={{ boxShadow: "inset 0 1px 30px -12px hsl(220 60% 70% / 0.10), 0 0 20px -8px hsl(220 60% 70% / 0.08)" }}>
      <div className="flex gap-3">
        <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
        <div className="text-sm text-foreground/85 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function ManualBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border p-5"
         style={{
           borderColor: "hsl(35 70% 50% / 0.25)",
           backgroundColor: "hsl(35 70% 50% / 0.05)",
           boxShadow: "inset 0 1px 30px -12px hsl(35 70% 50% / 0.08), 0 0 20px -8px hsl(35 70% 50% / 0.06)",
         }}>
      <div className="flex gap-3">
        <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "hsl(35 70% 55%)" }} />
        <div className="text-sm text-foreground/85 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function OptionalBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border p-5"
         style={{
           borderColor: "hsl(250 30% 50% / 0.25)",
           backgroundColor: "hsl(250 30% 50% / 0.05)",
           boxShadow: "inset 0 1px 30px -12px hsl(250 30% 50% / 0.08), 0 0 20px -8px hsl(250 30% 50% / 0.06)",
         }}>
      <div className="flex gap-3">
        <Lightbulb className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "hsl(250 30% 65%)" }} />
        <div className="text-sm text-foreground/85 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function QuickStartPage() {
  const [activeId, setActiveId] = useState("introduction");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);

  // Intersection observer for active section tracking
  useEffect(() => {
    const ids = sidebarSections.flatMap((s) => s.items.map((i) => i.id));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggle = (title: string) =>
    setCollapsed((prev) => ({ ...prev, [title]: !prev[title] }));

  const handleNavClick = (id: string) => {
    scrollToId(id);
    setMobileOpen(false);
  };

  const isCollapsed = (section: typeof sidebarSections[0]) => {
    if (!section.collapsible) return false;
    if (collapsed[section.title] !== undefined) return collapsed[section.title];
    return !section.defaultOpen;
  };

  const SidebarNav = () => (
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
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
                        activeId === item.id
                          ? "text-primary bg-primary/10 font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:shadow-[0_0_12px_-4px_hsl(var(--primary)/0.15)]"
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
  );

  return (
    <Layout>
      <div className="pt-8 pb-24">
        <div className="container">
          {/* Mobile sidebar toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 bg-card text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              Navigation
            </button>
          </div>

          {/* Mobile sidebar slide-out */}
          {mobileOpen && (
            <div className="lg:hidden mb-8 p-4 rounded-xl border border-border/50 bg-card animate-fade-in">
              <SidebarNav />
            </div>
          )}

          <div className="flex gap-10">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-20">
                <SidebarNav />
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0 max-w-[800px]">
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-24 mb-16 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Quick Start
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Moonveil is a quiet, moonlit Hyprland environment designed for Arch Linux.
                  It is not a theme or a collection of dotfiles — it is a philosophy made visible.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every element serves a purpose. Every choice is intentional. Moonveil creates a calm
                  workspace where your thoughts can breathe, with aesthetic refinement that enhances focus
                  rather than hinders it.
                </p>
                <AutomatedBlock>
                  Moonveil is fully open-source and community-driven. Built in the open, shaped by
                  those who use it.
                </AutomatedBlock>
              </section>

              {/* Automated Install */}
              <section id="automated-install" className="scroll-mt-24 mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
                  Automated Installation
                </h2>
                <AutomatedBlock>
                  The fastest way to get started. A single command handles everything —
                  downloading, configuring, and setting up your environment automatically.
                </AutomatedBlock>
                <CodeBlock
                  language="bash"
                  code="bash <(curl -s https://moonveil.vercel.app/os/stable)"
                />
                <p className="text-sm text-muted-foreground mt-4">
                  The installer will guide you through the process and report any issues automatically.
                </p>
              </section>

              {/* Manual Install */}
              <section id="manual-install" className="scroll-mt-24 mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
                  Manual Installation
                </h2>
                <ManualBlock>
                  For advanced users who prefer full control over the installation process.
                  Clone the repository and run the install script manually.
                </ManualBlock>
                <CodeBlock
                  language="bash"
                  code={`git clone https://github.com/notcandy001/Moonveil.git
cd Moonveil
./install.sh`}
                />
              </section>

              {/* Post Installation */}
              <section id="post-installation" className="scroll-mt-24 mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
                  Post Installation
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  After installation, log out and log back in to Hyprland. Moonveil's configuration
                  will be active immediately.
                </p>
                <CodeBlock language="bash" code="hyprctl reload" />
                <p className="text-sm text-muted-foreground mt-4">
                  You can also reload the configuration without logging out using the command above.
                </p>
              </section>

              {/* Updating */}
              <section id="updating" className="scroll-mt-24 mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
                  Updating
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Keep your Moonveil installation up to date with a single command.
                </p>
                <CodeBlock
                  language="bash"
                  code={`cd ~/Moonveil
git pull origin master`}
                />
                <p className="text-sm text-muted-foreground mt-4">
                  Reload Hyprland after pulling to apply changes.
                </p>
              </section>

              {/* Uninstall */}
              <section id="uninstall" className="scroll-mt-24 mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
                  Uninstall
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To remove Moonveil, run the uninstall script included in the repository.
                </p>
                <CodeBlock
                  language="bash"
                  code={`cd ~/Moonveil
./uninstall.sh`}
                />
                <ManualBlock>
                  Make sure you have any personal configurations saved before uninstalling.
                  The uninstall script will clean up all Moonveil-managed files.
                </ManualBlock>
              </section>

              {/* Configuration */}
              <section id="configuration" className="scroll-mt-24 mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
                  Configuration
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Moonveil uses a modular configuration structure. Each component can be
                  individually customized through its respective configuration file.
                </p>
                <OptionalBlock>
                  Advanced users can explore the configuration directory to fine-tune
                  individual components. All settings are documented inline.
                </OptionalBlock>
                <CodeBlock language="bash" code="ls ~/.config/hypr/" />
                <p className="text-sm text-muted-foreground mt-4">
                  Explore the configuration directory to see all available settings.
                </p>
              </section>

              {/* Fork Arrangement */}
              <section id="fork-arrangement" className="scroll-mt-24 mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
                  Fork Arrangement
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Moonveil encourages community involvement through forks and custom builds.
                  The project supports three tiers of customization:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="card-moon p-5">
                    <h3 className="font-display font-medium text-base mb-2">Community Forks</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Community members are welcome to fork Moonveil and create their own variations.
                      Forks that align with the Moonveil philosophy may be featured on the project page.
                    </p>
                  </div>
                  <div className="card-moon p-5">
                    <h3 className="font-display font-medium text-base mb-2">Custom Builds</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Build your own personalized Moonveil setup by selectively enabling or disabling
                      components. The modular architecture makes this straightforward.
                    </p>
                  </div>
                  <div className="card-moon p-5">
                    <h3 className="font-display font-medium text-base mb-2">Experimental Branches</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The repository maintains experimental branches where new features and ideas
                      are tested before merging into the stable release.
                    </p>
                  </div>
                </div>

                <OptionalBlock>
                  When forking, consider maintaining the project structure so your configuration
                  remains portable and easy to manage across updates.
                </OptionalBlock>
              </section>

              {/* Troubleshooting / FAQ */}
              <section id="troubleshooting" className="scroll-mt-24 mb-16 animate-fade-in-up">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
                  Troubleshooting / FAQ
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display font-medium text-base mb-2">
                      What distributions are supported?
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Moonveil is designed for Arch Linux and Arch-based distributions. Other distros
                      may work but are not officially supported.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-base mb-2">
                      Can I use Moonveil with a different compositor?
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Moonveil is built specifically for Hyprland. While some components may work
                      independently, the full experience requires Hyprland.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-base mb-2">
                      How do I contribute?
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Fork the repository, make your changes, and submit a pull request. Community
                      contributions that align with the Moonveil philosophy are always welcome.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-base mb-2">
                      Is there a community?
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Yes! Join the discussion on GitHub Issues and Discussions. Links are available
                      on the project repository.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
