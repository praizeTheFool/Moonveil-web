import { AutomatedBlock } from "@/components/quickstart/blocks";

export default function ReleaseNotesPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Release Notes</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Every release follows a consistent documentation structure.
      </p>

      <AutomatedBlock>
        <p className="font-medium mb-2">Release Structure</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Added</strong> — new features</li>
          <li><strong>Improved</strong> — enhancements</li>
          <li><strong>Fixed</strong> — bug fixes</li>
          <li><strong>Notes</strong> — additional context</li>
        </ul>
        <p className="mt-2">Transparency over surprise.</p>
      </AutomatedBlock>
    </div>
  );
}
