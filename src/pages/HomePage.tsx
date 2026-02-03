import { Layout } from "@/components/layout/Layout";
import { ShowcaseGallery } from "@/components/home/ShowcaseGallery";
import { Moon, Sparkles, Eye, Heart, Code2 } from "lucide-react";

const philosophyItems = [
  {
    icon: Sparkles,
    title: "Minimalism over excess",
    description: "Every element serves a purpose. Nothing more, nothing less.",
  },
  {
    icon: Eye,
    title: "Silence over noise",
    description: "A calm workspace where your thoughts can breathe.",
  },
  {
    icon: Heart,
    title: "Beauty without distraction",
    description: "Aesthetic refinement that enhances focus, not hinders it.",
  },
  {
    icon: Code2,
    title: "Open & community-driven",
    description: "Built in the open, shaped by those who use it.",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 md:py-40">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            {/* Moon icon with glow */}
            <div className="mb-8 flex justify-center animate-fade-in">
              <div className="relative">
                <Moon className="h-16 w-16 text-primary" />
                <div className="absolute inset-0 blur-2xl bg-primary/30 rounded-full animate-glow-pulse" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in-up glow-text">
              Moonveil
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed animate-fade-in-up animation-delay-200">
              A quiet, moonlit Hyprland environment
            </p>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-24 border-t border-border/20">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-center animate-fade-in">
              Origin
            </h2>
            
            <div className="space-y-6 prose-moon text-center animate-fade-in-up animation-delay-100">
              <p className="text-lg leading-relaxed">
                Moonveil began as a personal experiment a quiet rebellion against visual noise 
                and unnecessary complexity.
              </p>
              <p className="text-lg leading-relaxed">
                What started as scattered configuration files gradually evolved into something 
                more cohesive: a complete, standalone Hyprland environment where every choice 
                is intentional, every detail considered.
              </p>
              <p className="text-lg leading-relaxed">
                It is not a theme. It is not a collection of dotfiles. 
                <strong className="text-foreground"> It is a philosophy made visible.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 border-t border-border/20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-center">
              Philosophy
            </h2>
            <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
              A workspace designed for focus and flow
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {philosophyItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`card-moon p-6 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2.5 rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Gallery */}
      <ShowcaseGallery />

      {/* Call to Action */}
      <section className="py-24 border-t border-border/20">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-lg text-muted-foreground mb-8">
              Ready to embrace the quiet?
            </p>
         
            import { Link } from "react-router-dom";

<Link to="/install">
  <button className="your-existing-classes">
    Begin Installation
  </button>
</Link>

          </div>
        </div>
      </section>
    </Layout>
  );
}
