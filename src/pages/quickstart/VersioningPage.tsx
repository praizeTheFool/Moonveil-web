import { AutomatedBlock } from "@/components/quickstart/blocks";

export default function VersioningPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Versioning</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Moonveil follows a structured version format for clarity and predictability.
      </p>

      <AutomatedBlock>
        <p className="font-medium mb-2">Version Format</p>
        <p className="font-mono mb-2">MAJOR.MINOR.PATCH</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>MAJOR</strong> — architecture change</li>
          <li><strong>MINOR</strong> — feature addition</li>
          <li><strong>PATCH</strong> — fixes</li>
        </ul>
      </AutomatedBlock>
    </div>
  );
}
