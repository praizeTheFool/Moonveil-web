import { CodeBlock } from "@/components/docs/CodeBlock";
import { ManualBlock } from "@/components/quickstart/blocks";

export default function UninstallPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Uninstall</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">
        To remove Moonveil, run the uninstall script included in the repository.
      </p>

      <ManualBlock>
        <p className="font-medium mb-2">Removal Process</p>
        <p className="mb-2">Uninstall removes:</p>
        <ul className="list-disc list-inside space-y-1 mb-3">
          <li>Moonveil configuration</li>
          <li>Cache directories</li>
          <li>Installer traces</li>
        </ul>
        <p className="mb-2">It does NOT:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Remove system boot files</li>
          <li>Modify unrelated packages</li>
        </ul>
        <p className="mt-2">Moonveil respects system boundaries.</p>
      </ManualBlock>

      <CodeBlock
        language="bash"
        code={`cd ~/Moonveil
./uninstall.sh`}
      />
    </div>
  );
}
