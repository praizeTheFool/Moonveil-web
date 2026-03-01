import { Layout } from "@/components/layout/Layout";
import { AlertTriangle, Terminal, GitBranch, CheckCircle2, Copy } from "lucide-react";
import { useState } from "react";

function CodeBlock({ code, className = "" }: { code: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative group ${className}`}>
      <pre className="pr-12">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-muted/50 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary"
        aria-label="Copy code"
      >
        {copied ? (
          <CheckCircle2 className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export default function InstallPage() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Installation
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
              Moonveil is designed for <strong className="text-foreground">Arch Linux</strong> and <strong className="text-foreground">Hyprland</strong>.
              It manages configuration files using symbolic links (symlinks).
            </p>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="pb-16">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="card-moon p-6 border-destructive/30 animate-fade-in-up animation-delay-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-lg mb-3 text-destructive">
                    Important: Symlink Requirement
                  </h2>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Moonveil relies on symlinks to manage your configuration. 
                      If files already exist in <code>.config</code> or <code>bin</code>, 
                      the installation will fail.
                    </p>
                    <p>
                      <strong className="text-foreground">You must back up your existing files before installing.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Backup Instructions */}
      <section className="pb-16">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-mono">1</span>
              Backup Your Files
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Before installation, back up your existing configuration to prevent conflicts.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Create a backup directory:</p>
                <CodeBlock code="mkdir -p ~/backup" />
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Move your existing .config directory:</p>
                <CodeBlock code="mv ~/.config ~/backup/.config" />
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Move your existing bin directory (if present):</p>
                <CodeBlock code="mv ~/bin ~/backup/bin" />
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6 p-4 bg-muted/30 rounded-lg">
              This allows Moonveil to safely create symlinks without conflicts. 
              Your original files will be preserved in <code>~/backup</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Automatic Installation */}
      <section className="pb-16">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-mono">2</span>
              <Terminal className="h-5 w-5 text-primary" />
              Automatic Installation
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Moonveil can be installed via a one-line script:
            </p>

            <CodeBlock 
              code="curl -fsSL https://raw.githubusercontent.com/notcandy001/Moonveil/master/install.sh | bash" 
            />
          </div>
        </div>
      </section>

      {/* Manual Installation */}
      <section className="pb-16">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground text-sm font-mono">or</span>
              <GitBranch className="h-5 w-5 text-primary" />
              Manual Installation (Git)
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Alternatively, clone the repository manually:
            </p>

            <CodeBlock 
              code={`git clone https://github.com/notcandy001/Moonveil.git
cd ~/Moonveil
./install.sh`} 
            />
          </div>
        </div>
      </section>

      {/* Notes Section */}
      <section className="py-16 border-t border-border/20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl font-display font-semibold mb-8">Notes</h2>
            
            <ul className="space-y-3">
              {[
                "Designed for Arch Linux",
                "Built for Hyprland",
                "Uses Matugen for dynamic theming",
                "Fully open-source",
                "Minimal by design",
              ].map((note, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
