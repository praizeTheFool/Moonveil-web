import { useState } from "react";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { AutomatedBlock, ManualBlock } from "@/components/quickstart/blocks";

const tabs = [
  { id: "online", label: "Use online script" },
  { id: "manual", label: "Clone, cd and run" },
] as const;

type Tab = typeof tabs[number]["id"];

export default function InstallPage() {
  const [active, setActive] = useState<Tab>("online");

  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Install</h1>
      <h2 className="text-2xl font-display font-semibold mb-8 text-muted-foreground">Installing</h2>

      {/* Tab selector */}
      <div className="flex gap-6 border-b border-border/40 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`pb-3 text-sm font-medium transition-all duration-200 relative ${
              active === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            {active === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Online Script */}
      {active === "online" && (
        <div className="animate-fade-in">
          <AutomatedBlock>
            The fastest way to get started. A single command handles everything —
            downloading, configuring, and setting up your environment automatically.
          </AutomatedBlock>

          <h3 className="text-lg font-display font-medium mb-4 mt-8">Arch Linux <span className="text-sm text-muted-foreground font-normal">(Arch-based only)</span></h3>
          <CodeBlock
            language="bash"
            code="bash <(curl -sL https://moonveil-web.vercel.app/dots/stable/arch)"
          />

          <h3 className="text-lg font-display font-medium mb-4 mt-8">Debian / Ubuntu <span className="text-sm text-muted-foreground font-normal">(Debian-based)</span></h3>
          <CodeBlock
            language="bash"
            code="bash <(curl -sL https://moonveil-web.vercel.app/dots/stable/debian)"
          />

          <p className="text-sm text-muted-foreground mt-6">
            The installer will guide you through the process and report any issues automatically.
          </p>
        </div>
      )}

      {/* Manual */}
      {active === "manual" && (
        <div className="animate-fade-in">
          <ManualBlock>
            For advanced users who prefer full control over the installation process.
            Clone the repository and run the appropriate installer for your distribution.
          </ManualBlock>

          <h3 className="text-lg font-display font-medium mb-4 mt-8">Arch Linux Manual Installation</h3>
          <CodeBlock
            language="bash"
            code={`git clone https://github.com/notcandy001/Moonveil
cd Moonveil
./arch-installer.sh`}
          />

          <h3 className="text-lg font-display font-medium mb-4 mt-8">Debian / Ubuntu Manual Installation</h3>
          <CodeBlock
            language="bash"
            code={`git clone https://github.com/notcandy001/Moonveil
cd Moonveil
./debian-installer.sh`}
          />
        </div>
      )}
    </div>
  );
}
