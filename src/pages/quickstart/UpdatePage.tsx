import { CodeBlock } from "@/components/docs/CodeBlock";
import { AutomatedBlock } from "@/components/quickstart/blocks";

export default function UpdatePage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Update</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Keep your Moonveil installation up to date with a single command.
      </p>
      <CodeBlock
        language="bash"
        code={`cd ~/Moonveil
git pull origin master`}
      />
      <AutomatedBlock>
        Reload Hyprland after pulling to apply changes.
      </AutomatedBlock>
      <CodeBlock language="bash" code="hyprctl reload" />
    </div>
  );
}
