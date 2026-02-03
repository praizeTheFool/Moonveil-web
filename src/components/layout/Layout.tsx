import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Ambient glow effect */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-glow-gradient opacity-30 animate-glow-pulse" />
      </div>
      
      <Header />
      
      <main className="flex-1 pt-16">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
