import { CodeBlock } from "@/components/docs/CodeBlock";
import { ManualBlock } from "@/components/quickstart/blocks";

export default function UninstallPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Uninstall</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">
        To remove Moonveil, run the uninstall script included in the repository.
      </p>
      <CodeBlock
        language="bash"
        code={`cd ~/Moonveil
./uninstall.sh`}
      />
      <ManualBlock>
        Make sure you have any personal configurations saved before uninstalling.
        The uninstall script will clean up all Moonveil-managed files.
      </ManualBlock>
    </div>
  );
}
