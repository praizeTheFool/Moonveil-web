import { AlertTriangle } from "lucide-react";
import { ReactNode } from "react";

export function WarningBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
      <div className="flex gap-3">
        <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
        <div className="text-sm text-foreground/80 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
