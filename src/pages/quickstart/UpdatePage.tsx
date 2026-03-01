import { CodeBlock } from "@/components/docs/CodeBlock";
import { AutomatedBlock, SuccessBlock } from "@/components/quickstart/blocks";

export default function UpdatePage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Update</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Keep your Moonveil installation up to date.
      </p>

      <AutomatedBlock>
        <p className="font-medium mb-2">Update Process</p>
        <p>Pull the latest changes and re-run the installer for your distribution.</p>
      </AutomatedBlock>

      <h3 className="text-lg font-display font-medium mb-4 mt-8">Arch Linux</h3>
      <CodeBlock
        language="bash"
        code={`cd Moonveil
git pull
./arch-installer.sh`}
      />

      <h3 className="text-lg font-display font-medium mb-4 mt-8">Debian / Ubuntu</h3>
      <CodeBlock
        language="bash"
        code={`cd Moonveil
git pull
./debian-installer.sh`}
      />

      <SuccessBlock>
        <p className="font-medium mb-2">What Update Does</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Pulls latest configuration</li>
          <li>Applies improvements</li>
          <li>Preserves user-level changes</li>
          <li>Re-validates dependencies</li>
        </ul>
        <p className="mt-2">Moonveil updates are controlled and predictable.</p>
      </SuccessBlock>
    </div>
  );
}
