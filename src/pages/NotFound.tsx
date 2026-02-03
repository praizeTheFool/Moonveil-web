import { Layout } from "@/components/layout/Layout";
import { Moon } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-32 md:py-40">
        <div className="container">
          <div className="mx-auto max-w-md text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative opacity-30">
                <Moon className="h-16 w-16 text-muted-foreground" />
              </div>
            </div>
            
            <h1 className="text-6xl font-display font-bold mb-4 text-muted-foreground">
              404
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              This page has drifted into the void.
            </p>
            
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary/40"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
