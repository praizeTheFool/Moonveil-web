import { Info, AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

export function AutomatedBlock({ children }: { children: ReactNode }) {
  return (
    <div
      className="my-6 rounded-2xl border p-5"
      style={{
        borderColor: "hsl(220 60% 50% / 0.25)",
        background: "linear-gradient(135deg, hsl(220 40% 12% / 0.9), hsl(240 35% 18% / 0.7))",
        boxShadow:
          "inset 0 1px 30px -12px hsl(220 60% 50% / 0.12), 0 0 24px -8px hsl(220 60% 50% / 0.10), 0 4px 16px -4px hsl(0 0% 0% / 0.3)",
      }}
    >
      <div className="flex gap-3">
        <Info className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "hsl(220 70% 65%)" }} />
        <div className="text-sm text-foreground/90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function ManualBlock({ children }: { children: ReactNode }) {
  return (
    <div
      className="my-6 rounded-2xl border p-5"
      style={{
        borderColor: "hsl(35 60% 45% / 0.25)",
        background: "linear-gradient(135deg, hsl(30 15% 12% / 0.9), hsl(35 30% 16% / 0.7))",
        boxShadow:
          "inset 0 1px 30px -12px hsl(35 60% 45% / 0.10), 0 0 24px -8px hsl(35 60% 45% / 0.08), 0 4px 16px -4px hsl(0 0% 0% / 0.3)",
      }}
    >
      <div className="flex gap-3">
        <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "hsl(35 70% 55%)" }} />
        <div className="text-sm text-foreground/90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function OptionalBlock({ children }: { children: ReactNode }) {
  return (
    <div
      className="my-6 rounded-2xl border p-5"
      style={{
        borderColor: "hsl(270 30% 45% / 0.25)",
        background: "linear-gradient(135deg, hsl(270 20% 12% / 0.9), hsl(260 25% 18% / 0.7))",
        boxShadow:
          "inset 0 1px 30px -12px hsl(270 30% 45% / 0.10), 0 0 24px -8px hsl(270 30% 45% / 0.08), 0 4px 16px -4px hsl(0 0% 0% / 0.3)",
      }}
    >
      <div className="flex gap-3">
        <Lightbulb className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "hsl(270 40% 65%)" }} />
        <div className="text-sm text-foreground/90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export function SuccessBlock({ children }: { children: ReactNode }) {
  return (
    <div
      className="my-6 rounded-2xl border p-5"
      style={{
        borderColor: "hsl(155 40% 35% / 0.25)",
        background: "linear-gradient(135deg, hsl(155 20% 10% / 0.9), hsl(160 25% 14% / 0.7))",
        boxShadow:
          "inset 0 1px 30px -12px hsl(155 40% 35% / 0.10), 0 0 24px -8px hsl(155 40% 35% / 0.08), 0 4px 16px -4px hsl(0 0% 0% / 0.3)",
      }}
    >
      <div className="flex gap-3">
        <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "hsl(155 50% 50%)" }} />
        <div className="text-sm text-foreground/90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
