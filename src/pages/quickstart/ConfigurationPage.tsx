import { AutomatedBlock, OptionalBlock } from "@/components/quickstart/blocks";

export default function ConfigurationPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Configuration</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Moonveil uses a modular configuration structure. Each component can be
        individually customized through its respective configuration file.
      </p>

      <AutomatedBlock>
        <p className="font-medium mb-2">Configuration Layout</p>
        <p className="mb-1"><strong>Source:</strong> <code className="bg-transparent p-0">~/Moonveil</code></p>
        <p className="mb-2"><strong>Deployed:</strong> <code className="bg-transparent p-0">~/.config/*</code></p>
        <p>Runtime reads from <code className="bg-transparent p-0">~/.config</code> during Hyprland session start.</p>
      </AutomatedBlock>

      <OptionalBlock>
        <p className="font-medium mb-2">Dynamic Color Pipeline</p>
        <p className="mb-1">Wallpaper selected</p>
        <p className="mb-1">↓ Matugen extracts palette</p>
        <p className="mb-1">↓ Color variables exported</p>
        <p className="mb-1">↓ Hyprland + Fabric read variables</p>
        <p className="mb-2">↓ UI renders dynamically</p>
        <p>No hardcoded themes. Color adapts per wallpaper.</p>
      </OptionalBlock>
    </div>
  );
}
