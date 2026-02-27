export default function TroubleshootingPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Troubleshooting / FAQ</h1>
      <div className="space-y-6">
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
    </div>
  );
}
