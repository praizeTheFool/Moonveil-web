import { SuccessBlock } from "@/components/quickstart/blocks";

export default function ContributingPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contributing</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Moonveil is author-led. Contributions are welcome, but direction remains centralized.
      </p>

      <SuccessBlock>
        <p className="font-medium mb-2">Contribution Policy</p>
        <p className="mb-2">All PRs must:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Preserve performance</li>
          <li>Respect distro separation</li>
          <li>Maintain structure</li>
          <li>Avoid heavy dependency additions</li>
        </ul>
      </SuccessBlock>
    </div>
  );
}
