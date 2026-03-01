import { AutomatedBlock, OptionalBlock } from "@/components/quickstart/blocks";

export default function CreditsPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Credits & Appreciation</h1>

      <AutomatedBlock>
        <p className="font-medium mb-2">Project Credits</p>
        <p className="mb-2">
          Moonveil was created and is independently developed by: <strong>notcandy001</strong>
        </p>
        <p>Built on the foundation of the Hyprland ecosystem.</p>
      </AutomatedBlock>

      <OptionalBlock>
        <p className="font-medium mb-3">Appreciation</p>
        <p className="mb-2">Thank you to:</p>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li>The Hyprland developers</li>
          <li>The open-source ecosystem</li>
          <li><strong>Candy</strong> — a friend who helped shape the Moonveil website and documentation journey</li>
        </ul>
        <p className="mb-1">Moonveil was built from frustration.</p>
        <p className="mb-1">Refined with patience.</p>
        <p>Shared with intention.</p>
      </OptionalBlock>
    </div>
  );
}
