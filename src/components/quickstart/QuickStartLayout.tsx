import { Outlet } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { QuickStartSidebar } from "./QuickStartSidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function QuickStartLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Layout>
      <div className="pt-8 pb-24">
        <div className="container">
          {/* Mobile sidebar toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 bg-card text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              Navigation
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden mb-8 p-4 rounded-xl border border-border/50 bg-card animate-fade-in">
              <QuickStartSidebar onNavigate={() => setMobileOpen(false)} />
            </div>
          )}

          <div className="flex gap-10">
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-20">
                <QuickStartSidebar />
              </div>
            </aside>

            <div className="flex-1 min-w-0 max-w-[800px] animate-fade-in-up">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
