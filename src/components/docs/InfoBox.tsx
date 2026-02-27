import { Info } from "lucide-react";
import { ReactNode } from "react";

export function InfoBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
      <div className="flex gap-3">
        <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
        <div className="text-sm text-foreground/80 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
