import { Info, AlertTriangle, Lightbulb } from "lucide-react";
import { ReactNode } from "react";

export function AutomatedBlock({ children }: { children: ReactNode }) {
  return (
    <div
      className="my-6 rounded-2xl border border-primary/25 bg-primary/5 p-5"
      style={{
        boxShadow:
          "inset 0 1px 30px -12px hsl(220 60% 70% / 0.10), 0 0 20px -8px hsl(220 60% 70% / 0.08)",
      }}
    >
      <div className="flex gap-3">
        <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
        <div className="text-sm text-foreground/85 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function ManualBlock({ children }: { children: ReactNode }) {
  return (
    <div
      className="my-6 rounded-2xl border p-5"
      style={{
        borderColor: "hsl(35 70% 50% / 0.25)",
        backgroundColor: "hsl(35 70% 50% / 0.05)",
        boxShadow:
          "inset 0 1px 30px -12px hsl(35 70% 50% / 0.08), 0 0 20px -8px hsl(35 70% 50% / 0.06)",
      }}
    >
      <div className="flex gap-3">
        <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "hsl(35 70% 55%)" }} />
        <div className="text-sm text-foreground/85 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function OptionalBlock({ children }: { children: ReactNode }) {
  return (
    <div
      className="my-6 rounded-2xl border p-5"
      style={{
        borderColor: "hsl(250 30% 50% / 0.25)",
        backgroundColor: "hsl(250 30% 50% / 0.05)",
        boxShadow:
          "inset 0 1px 30px -12px hsl(250 30% 50% / 0.08), 0 0 20px -8px hsl(250 30% 50% / 0.06)",
      }}
    >
      <div className="flex gap-3">
        <Lightbulb className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "hsl(250 30% 65%)" }} />
        <div className="text-sm text-foreground/85 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
