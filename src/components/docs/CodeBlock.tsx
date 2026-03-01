import { useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-4 rounded-lg border border-border/50 bg-[hsl(var(--night-deep))] overflow-hidden">
      {language && (
        <div className="flex items-center justify-between border-b border-border/30 px-4 py-2">
          <span className="text-xs text-muted-foreground font-mono">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm">
          <code className="bg-transparent p-0">{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-muted/30 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all hover:text-primary hover:bg-muted/50"
          aria-label="Copy code"
        >
          {copied ? (
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
