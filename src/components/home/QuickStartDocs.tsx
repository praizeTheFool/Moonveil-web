import { useState, useEffect, useRef } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { InfoBox } from "@/components/docs/InfoBox";
import { WarningBox } from "@/components/docs/WarningBox";

const sidebarSections = [
  {
    title: "Getting Started",
    items: [
      { id: "qs-introduction", label: "Introduction" },
    ],
  },
  {
    title: "Installation",
    collapsible: true,
    items: [
      { id: "qs-automated-install", label: "Automated Install" },
      { id: "qs-manual-install", label: "Manual Install" },
    ],
  },
  {
    title: "Configuration",
    items: [
      { id: "qs-fork-arrangement", label: "Fork Arrangement" },
      { id: "qs-post-installation", label: "Post Installation" },
    ],
  },
  {
    title: "Maintenance",
    items: [
      { id: "qs-updating", label: "Updating" },
      { id: "qs-uninstall", label: "Uninstall" },
    ],
  },
  {
    title: "Help",
    items: [
      { id: "qs-faq", label: "FAQ" },
    ],
  },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function QuickStartDocs() {
  const [activeId, setActiveId] = useState("qs-introduction");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
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

  const Sidebar = ({ className = "" }: { className?: string }) => (
    <nav className={`space-y-6 ${className}`}>
      {sidebarSections.map((section) => {
        const isCollapsed = collapsed[section.title];
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
                <ChevronRight
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    !isCollapsed ? "rotate-90" : ""
                  }`}
                />
              )}
            </button>

            {!isCollapsed && (
              <ul className="space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
                        activeId === item.id
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
  );

  return (
    <section id="quick-start" className="scroll-mt-20 border-t border-border/20" ref={sectionRef}>
      <div className="container py-16">
        {/* Mobile sidebar toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 bg-card text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            Documentation Menu
          </button>
        </div>

        {/* Mobile sidebar slide-out */}
        {mobileOpen && (
          <div className="lg:hidden mb-8 p-4 rounded-xl border border-border/50 bg-card animate-fade-in">
            <Sidebar />
          </div>
        )}

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-[800px]">
            {/* Introduction */}
            <section id="qs-introduction" className="scroll-mt-24 mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Quick Start
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Moonveil is a quiet, moonlit Hyprland environment designed for Arch Linux.
                It is not a theme or a collection of dotfiles — it is a philosophy made visible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every element serves a purpose. Every choice is intentional. Moonveil creates a calm
                workspace where your thoughts can breathe, with aesthetic refinement that enhances focus
                rather than hinders it.
              </p>
              <InfoBox>
                Moonveil is fully open-source and community-driven. Built in the open, shaped by
                those who use it.
              </InfoBox>
            </section>

            {/* Automated Install */}
            <section id="qs-automated-install" className="scroll-mt-24 mb-16 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
                Automated Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The fastest way to get started. A single command handles everything —
                downloading, configuring, and setting up your environment.
              </p>
              <CodeBlock
                language="bash"
                code="bash <(curl -s https://moonveil.vercel.app/os/stable)"
              />
              <p className="text-sm text-muted-foreground mt-4">
                The installer will guide you through the process and report any issues automatically.
              </p>
            </section>

            {/* Manual Install */}
            <section id="qs-manual-install" className="scroll-mt-24 mb-16 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
                Manual Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you prefer more control, clone the repository and run the install script manually.
              </p>
              <CodeBlock
                language="bash"
                code={`git clone https://github.com/notcandy001/Moonveil.git
cd Moonveil
./install.sh`}
              />
            </section>

            {/* Fork Arrangement */}
            <section id="qs-fork-arrangement" className="scroll-mt-24 mb-16 animate-fade-in-up">
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

              <InfoBox>
                When forking, consider maintaining the project structure so your configuration
                remains portable and easy to manage across updates.
              </InfoBox>
            </section>

            {/* Post Installation */}
            <section id="qs-post-installation" className="scroll-mt-24 mb-16 animate-fade-in-up">
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
            <section id="qs-updating" className="scroll-mt-24 mb-16 animate-fade-in-up">
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
            <section id="qs-uninstall" className="scroll-mt-24 mb-16 animate-fade-in-up">
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
              <WarningBox>
                Make sure you have any personal configurations saved before uninstalling.
                The uninstall script will clean up all Moonveil-managed files.
              </WarningBox>
            </section>

            {/* FAQ */}
            <section id="qs-faq" className="scroll-mt-24 mb-16 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
                FAQ
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
    </section>
  );
}
