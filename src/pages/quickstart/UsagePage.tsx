import { OptionalBlock } from "@/components/quickstart/blocks";

export default function UsagePage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Usage</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Once installed, Moonveil is ready to use. Log out and log back in to Hyprland to activate
        the environment.
      </p>

      <h2 className="text-2xl font-display font-semibold mb-4">Fork Arrangement</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Moonveil encourages community involvement through forks and custom builds.
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
    </div>
  );
}
