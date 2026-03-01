import { OptionalBlock } from "@/components/quickstart/blocks";

export default function RoadmapPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Roadmap</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">
        The future direction of Moonveil.
      </p>

      <OptionalBlock>
        <p className="font-medium mb-2">Vision Forward</p>
        <p className="mb-2">Moonveil will continue to prioritize:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Lightweight execution</li>
          <li>Clean structure</li>
          <li>Hardware awareness</li>
          <li>Documentation clarity</li>
        </ul>
      </OptionalBlock>
    </div>
  );
}
