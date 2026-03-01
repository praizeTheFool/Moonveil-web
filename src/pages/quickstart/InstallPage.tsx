import { useState } from "react";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { AutomatedBlock, ManualBlock, OptionalBlock, SuccessBlock } from "@/components/quickstart/blocks";

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

      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Moonveil is a quiet, moonlit Hyprland environment designed for Linux.
        It is not a theme or a collection of dotfiles — it is a philosophy made visible.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Every element serves a purpose. Every choice is intentional. Moonveil creates a calm
        workspace where your thoughts can breathe, with aesthetic refinement that enhances focus
        rather than hinders it.
      </p>

      <OptionalBlock>
        <p className="font-medium mb-2">Why Moonveil Was Built</p>
        <p className="mb-2">
          Moonveil began with frustration. A kid with low-end laptops. Limited hardware. Limited resources.
        </p>
        <p className="mb-2">
          Many Hyprland dotfiles assumed high-end systems. Heavy animations. GPU-demanding modules.
          Moonveil was built differently. It was designed to:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-2">
          <li>Run smoothly on modest hardware</li>
          <li>Avoid unnecessary overhead</li>
          <li>Maintain clean architecture</li>
          <li>Deliver elegance without performance sacrifice</li>
        </ul>
        <p className="mb-2">
          What began as a hobby became a structured project.
        </p>
        <p>Moonveil proves: lightweight does not mean low quality.</p>
      </OptionalBlock>

      <OptionalBlock>
        <p className="font-medium mb-2">Author-Led Philosophy</p>
        <p className="mb-2">
          Moonveil is independently built and maintained by its author.
          It is not community-driven. It is not managed by a team.
          It is an intentional, author-directed project.
        </p>
        <p>
          Contributions are welcome, but architectural decisions remain centralized
          to preserve clarity and long-term structure.
        </p>
      </OptionalBlock>

      <h2 id="installing" className="text-2xl font-display font-semibold mb-8 text-muted-foreground scroll-mt-24">Installing</h2>

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
            <p className="font-medium mb-2">Automated Installation</p>
            <p className="mb-2">The automated installer performs:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Distro detection</li>
              <li>Package manager mapping</li>
              <li>Dependency validation</li>
              <li>Required package installation</li>
              <li>Configuration deployment</li>
              <li>Permission correction</li>
              <li>Post-install verification</li>
            </ol>
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

          <p className="text-muted-foreground text-sm mt-4 mb-4">
            Separate scripts ensure stability across package ecosystems.
          </p>

          <SuccessBlock>
            <p className="font-medium mb-2">Safe Execution Notice</p>
            <p className="mb-2">Installers are idempotent. They can be re-run safely.</p>
            <p className="mb-2">They do NOT:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Modify bootloader</li>
              <li>Override system files</li>
              <li>Break package managers</li>
            </ul>
            <p className="mt-2">They operate at user-level.</p>
          </SuccessBlock>
        </div>
      )}

      {/* Manual */}
      {active === "manual" && (
        <div className="animate-fade-in">
          <ManualBlock>
            <p className="font-medium mb-2">Manual Installation</p>
            <p>For users who prefer full visibility over the installation process.</p>
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

          <AutomatedBlock>
            <p className="font-medium mb-2">Internal Deployment Flow</p>
            <p className="mb-2">Moonveil follows a two-layer structure:</p>
            <p className="mb-1"><strong>Layer 1 — Repository:</strong> <code className="bg-transparent p-0">~/Moonveil</code></p>
            <p className="mb-2"><strong>Layer 2 — Active Configuration:</strong> <code className="bg-transparent p-0">~/.config/*</code></p>
            <p className="mb-2">No dedicated <code className="bg-transparent p-0">~/.config/moonveil</code> folder exists.</p>
            <p className="mb-1">This separation allows:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Clean updates</li>
              <li>Controlled overwrites</li>
              <li>Easy removal</li>
              <li>Clear source of truth</li>
            </ul>
          </AutomatedBlock>
        </div>
      )}

      {/* ───── Updating ───── */}
      <h2 id="updating" className="text-2xl font-display font-semibold mb-6 mt-16 text-muted-foreground scroll-mt-24">Updating</h2>

      <AutomatedBlock>
        <p className="font-medium mb-2">Update Process</p>
        <p>Pull the latest changes and re-run the installer for your distribution.</p>
      </AutomatedBlock>

      <h3 className="text-lg font-display font-medium mb-4 mt-8">Arch Linux</h3>
      <CodeBlock
        language="bash"
        code={`cd ~/Moonveil
git pull
./arch-installer.sh`}
      />

      <h3 className="text-lg font-display font-medium mb-4 mt-8">Debian / Ubuntu</h3>
      <CodeBlock
        language="bash"
        code={`cd ~/Moonveil
git pull
./debian-installer.sh`}
      />

      <SuccessBlock>
        <p className="font-medium mb-2">What Happens Internally</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Repository updates in ~/Moonveil</li>
          <li>Installer redeploys updated configs</li>
          <li>Dependencies revalidated</li>
          <li>Runtime reload recommended</li>
        </ul>
        <p className="mt-2">No OS reinstall required.</p>
      </SuccessBlock>

      {/* ───── Uninstalling ───── */}
      <h2 id="uninstalling" className="text-2xl font-display font-semibold mb-6 mt-16 text-muted-foreground scroll-mt-24">Uninstalling</h2>

      <ManualBlock>
        <p className="font-medium mb-2">Removal Process</p>
        <p className="mb-2">Uninstall removes:</p>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li>Deployed configuration inside ~/.config</li>
          <li>Associated runtime files</li>
        </ul>
      </ManualBlock>

      <CodeBlock
        language="bash"
        code="rm -rf ~/Moonveil"
      />

      <ManualBlock>
        <p className="font-medium mb-2">Moonveil does NOT:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Modify boot system</li>
          <li>Remove unrelated packages</li>
          <li>Leave hidden system hooks</li>
        </ul>
      </ManualBlock>
    </div>
  );
}
