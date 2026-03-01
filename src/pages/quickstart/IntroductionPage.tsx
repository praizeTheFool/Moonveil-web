import { AutomatedBlock } from "@/components/quickstart/blocks";

export default function IntroductionPage() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Quick Start</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Moonveil is a quiet, moonlit Hyprland environment designed for Linux.
        It is not a theme or a collection of dotfiles — it is a philosophy made visible.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Every element serves a purpose. Every choice is intentional. Moonveil creates a calm
        workspace where your thoughts can breathe, with aesthetic refinement that enhances focus
        rather than hinders it.
      </p>
      <AutomatedBlock>
        Moonveil is fully open-source and community-driven. Built in the open, shaped by
        those who use it.
      </AutomatedBlock>
    </div>
  );
}
