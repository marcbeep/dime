import Link from "next/link";
import { Heart, Github, Linkedin, Globe } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="w-full border-t bg-white text-muted-foreground text-sm px-4 py-8 mt-12">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left">
        {/* About Dime */}
        <div>
          <h2 className="font-semibold text-lg mb-2 text-black">About Dime</h2>
          <p className="mb-1">
            Smart budgeting and financial tracking made simple. Take control of
            your finances with intuitive tools and insights.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Link
              href="/dashboard"
              className="px-3 py-1 rounded-full border border-muted-foreground/30 bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors text-xs font-medium"
            >
              Budget Tracking
            </Link>
            <Link
              href="/dashboard"
              className="px-3 py-1 rounded-full border border-muted-foreground/30 bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors text-xs font-medium"
            >
              Expense Categories
            </Link>
            <Link
              href="/dashboard"
              className="px-3 py-1 rounded-full border border-muted-foreground/30 bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors text-xs font-medium"
            >
              Financial Insights
            </Link>
            <Link
              href="/dashboard"
              className="px-3 py-1 rounded-full border border-muted-foreground/30 bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors text-xs font-medium"
            >
              Net Worth Tracking
            </Link>
          </div>
        </div>
        {/* About Marc Beepath */}
        <div>
          <h2 className="font-semibold text-lg mb-2 text-black">
            Marc Beepath
          </h2>
          <p className="mb-2">
            Software engineer from Trinidad & Tobago, based in the UK. I build
            things people love. I also built{" "}
            <Link
              href="https://code.marc.tt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              CodeDuck
            </Link>{" "}
            to help people with interview prep.
          </p>
          <div className="flex gap-3 mb-2 text-primary">
            <Link
              href="https://marc.tt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary/80 transition-colors"
            >
              <Globe className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/marcbeep"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary/80 transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/marcbeep"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary/80 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center border-t mt-8 pt-6 text-xs text-muted-foreground gap-2">
        <span>
          © {new Date().getFullYear()} Dime. Built by{" "}
          <Link href="https://marc.tt" className="hover:underline">
            Marc Beepath
          </Link>{" "}
          in Liverpool with Next.js, TypeScript, and{" "}
          <Heart className="inline h-3 w-3 text-red-500 fill-current align-text-bottom" />
          .
        </span>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
