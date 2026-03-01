import { AutomatedBlock } from "@/components/quickstart/blocks";

export default function ArchitecturePage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Architecture</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Moonveil is built on a modular stack. Each layer serves a defined purpose and can be understood independently.
      </p>

      <AutomatedBlock>
        <p className="font-medium mb-2">Core Stack</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Hyprland</strong> — compositor</li>
          <li><strong>Fabric</strong> — widget layer</li>
          <li><strong>Matugen</strong> — color generator</li>
          <li><strong>Shell scripts</strong> — orchestration</li>
        </ul>
      </AutomatedBlock>

      <AutomatedBlock>
        <p className="font-medium mb-2">Component Interaction Flow</p>
        <p className="mb-1">Hyprland starts</p>
        <p className="mb-1">↓ Reads config from ~/.config</p>
        <p className="mb-1">↓ Fabric widgets initialize</p>
        <p className="mb-1">↓ Matugen palette injected</p>
        <p className="mb-2">↓ UI fully rendered</p>
        <p>Each layer remains modular.</p>
      </AutomatedBlock>
    </div>
  );
}
