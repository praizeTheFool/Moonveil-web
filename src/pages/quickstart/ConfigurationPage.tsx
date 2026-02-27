import { CodeBlock } from "@/components/docs/CodeBlock";
import { OptionalBlock } from "@/components/quickstart/blocks";

export default function ConfigurationPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Configuration</h1>
      <p className="text-muted-foreground leading-relaxed mb-6">
        Moonveil uses a modular configuration structure. Each component can be
        individually customized through its respective configuration file.
      </p>
      <OptionalBlock>
        Advanced users can explore the configuration directory to fine-tune
        individual components. All settings are documented inline.
      </OptionalBlock>
      <CodeBlock language="bash" code="ls ~/.config/hypr/" />
      <p className="text-sm text-muted-foreground mt-4">
        Explore the configuration directory to see all available settings.
      </p>
    </div>
  );
}
