import { Layout } from "@/components/layout/Layout";
import { Github, User, MessageCircle, ExternalLink } from "lucide-react";

const links = [
  {
    icon: Github,
    title: "GitHub Repository",
    description: "Source code, issues, and contributions",
    url: "https://github.com/notcandy001/Moonveil",
    label: "notcandy001/Moonveil",
  },
  {
    icon: MessageCircle,
    title: "Reddit",
    description: "Community discussions and updates",
    url: "https://www.reddit.com/user/praizeTheFool",
    label: "u/praizeTheFool",
  },
  {
    icon: User,
    title: "Author",
    description: "The creator behind Moonveil",
    url: "https://github.com/notcandy001",
    label: "notcandy001",
  },
];

export default function LinksPage() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
              Links
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
              Connect with the Moonveil community
            </p>
          </div>
        </div>
      </section>

      {/* Links Grid */}
      <section className="pb-24">
        <div className="container">
          <div className="mx-auto max-w-2xl space-y-4">
            {links.map((link, index) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block card-moon p-6 transition-all duration-300 hover:border-primary/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-5">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display font-medium text-lg mb-1 flex items-center gap-2">
                      {link.title}
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h2>
                    <p className="text-sm text-muted-foreground mb-2">
                      {link.description}
                    </p>
                    <p className="text-sm text-primary/80 font-mono">
                      {link.label}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="py-16 border-t border-border/20">
        <div className="container">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-xl font-display font-semibold mb-4">
              Contribute
            </h2>
            <p className="text-muted-foreground mb-8">
              Moonveil is open-source and welcomes contributions. 
              Whether it's bug reports, feature requests, or pull requests—your 
              input helps shape this project.
            </p>
            <a
              href="https://github.com/notcandy001/Moonveil/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>Open an Issue</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
