import { DocsLayout } from "@/components/docs/DocsLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { InfoBox } from "@/components/docs/InfoBox";
import { WarningBox } from "@/components/docs/WarningBox";
import { CheckCircle2 } from "lucide-react";

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  { id: "installing", text: "Installing", level: 2 },
  { id: "prerequisites", text: "Prerequisites", level: 3 },
  { id: "backup", text: "Backup Your Files", level: 3 },
  { id: "automated-installation", text: "Automated Installation", level: 2 },
  { id: "manual-installation", text: "Manual Installation", level: 2 },
  { id: "forks", text: "Forks", level: 2 },
  { id: "post-installation", text: "Post Installation", level: 2 },
  { id: "updating", text: "Updating", level: 2 },
  { id: "uninstalling", text: "Uninstalling", level: 2 },
];

export default function DocsPage() {
  return (
    <DocsLayout headings={headings}>
      {/* Overview */}
      <section id="overview" className="scroll-mt-24 mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Moonveil Documentation
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

        <InfoBox>
          Moonveil is fully open-source and community-driven. Built in the open, shaped by 
          those who use it.
        </InfoBox>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Designed for Arch Linux",
            "Built for Hyprland",
            "Uses Matugen for dynamic theming",
            "Fully open-source",
            "Minimal by design",
            "Symlink-based configuration",
          ].map((note) => (
            <div key={note} className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              <span>{note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Installing */}
      <section id="installing" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Installing</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Moonveil manages configuration files using symbolic links (symlinks). Follow these 
          steps carefully to set up your environment.
        </p>

        <h3 id="prerequisites" className="scroll-mt-24 text-xl font-display font-medium mb-4 mt-10">
          Prerequisites
        </h3>
        <ul className="space-y-2 text-muted-foreground text-sm mb-6">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Arch Linux (or Arch-based distribution)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Hyprland installed and configured</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Git and curl available in your PATH</span>
          </li>
        </ul>

        <WarningBox>
          <strong className="text-foreground">Symlink Requirement:</strong> Moonveil relies on symlinks 
          to manage your configuration. If files already exist in <code>.config</code> or <code>bin</code>, 
          the installation will fail. You must back up your existing files before installing.
        </WarningBox>

        <h3 id="backup" className="scroll-mt-24 text-xl font-display font-medium mb-4 mt-10">
          Backup Your Files
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          Before installation, back up your existing configuration to prevent conflicts.
        </p>
        <CodeBlock language="bash" code="mkdir -p ~/backup" />
        <CodeBlock language="bash" code="mv ~/.config ~/backup/.config" />
        <CodeBlock language="bash" code="mv ~/bin ~/backup/bin" />

        <InfoBox>
          Your original files will be safely preserved in <code>~/backup</code>. You can 
          restore them at any time.
        </InfoBox>
      </section>

      {/* Automated Installation */}
      <section id="automated-installation" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
          Automated Installation
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The fastest way to install Moonveil. A single command handles everything — 
          cloning the repository, creating symlinks, and installing dependencies.
        </p>
        <CodeBlock
          language="bash"
          code="curl -fsSL https://raw.githubusercontent.com/notcandy001/Moonveil/master/install.sh | bash"
        />
        <p className="text-sm text-muted-foreground mt-4">
          The script will guide you through the process and report any issues.
        </p>
      </section>

      {/* Manual Installation */}
      <section id="manual-installation" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
          Manual Installation
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          If you prefer more control, clone the repository and run the install script manually.
        </p>
        <CodeBlock
          language="bash"
          code={`git clone https://github.com/notcandy001/Moonveil.git
cd ~/Moonveil
./install.sh`}
        />
      </section>

      {/* Forks */}
      <section id="forks" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Forks</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Moonveil encourages forking. If you want to create your own variation, fork the 
          repository and customize it to your liking. Community forks that align with 
          Moonveil's philosophy may be featured.
        </p>
        <InfoBox>
          When forking, consider maintaining the symlink structure so your configuration 
          remains portable and easy to manage.
        </InfoBox>
      </section>

      {/* Post Installation */}
      <section id="post-installation" className="scroll-mt-24 mb-16">
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
      <section id="updating" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Updating</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Since Moonveil uses symlinks, updating is as simple as pulling the latest changes.
        </p>
        <CodeBlock
          language="bash"
          code={`cd ~/Moonveil
git pull origin master`}
        />
        <p className="text-sm text-muted-foreground mt-4">
          Your symlinks will automatically point to the updated files. Reload Hyprland to 
          apply changes.
        </p>
      </section>

      {/* Uninstalling */}
      <section id="uninstalling" className="scroll-mt-24 mb-16">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Uninstalling</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          To remove Moonveil, delete the symlinks and restore your backup.
        </p>
        <CodeBlock
          language="bash"
          code={`# Remove Moonveil symlinks
rm -rf ~/.config
rm -rf ~/bin

# Restore your backup
mv ~/backup/.config ~/.config
mv ~/backup/bin ~/bin

# Remove the Moonveil directory
rm -rf ~/Moonveil`}
        />
        <WarningBox>
          Make sure you have a backup before uninstalling. Removing symlinks without 
          restoring your original files will leave you without configuration.
        </WarningBox>
      </section>
    </DocsLayout>
  );
}
