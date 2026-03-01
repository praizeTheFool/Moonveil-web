import { ManualBlock } from "@/components/quickstart/blocks";

export default function TroubleshootingPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Troubleshooting / FAQ</h1>

      <ManualBlock>
        <p className="font-medium mb-2">Common Issues</p>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li>Missing dependency</li>
          <li>Incorrect Wayland session</li>
          <li>Broken mirror</li>
          <li>Incomplete script execution</li>
        </ul>
        <p className="font-medium mb-2">Solutions:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Re-run installer</li>
          <li>Verify distro</li>
          <li>Check package manager logs</li>
        </ul>
      </ManualBlock>

      <div className="space-y-6 mt-8">
        <div>
          <h3 className="font-display font-medium text-base mb-2">
            What distributions are supported?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Moonveil supports Arch Linux (and Arch-based distributions) as well as
            Debian and Ubuntu (Debian-based distributions).
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
            Fork the repository, make your changes, and submit a pull request.
          </p>
        </div>
      </div>
    </div>
  );
}
