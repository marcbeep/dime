import Link from "next/link";
import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">About Dime</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Smart budgeting and financial tracking made simple. Take control
                of your finances with intuitive tools and insights.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-4">
            <h3 className="font-semibold">Features</h3>
            <nav className="space-y-2">
              <Link
                href="/dashboard"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Budget Tracking
              </Link>
              <Link
                href="/dashboard"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Expense Categories
              </Link>
              <Link
                href="/dashboard"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Financial Insights
              </Link>
              <Link
                href="/dashboard"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Net Worth Tracking
              </Link>
            </nav>
          </div>

          {/* Personal Section - Marc */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Marc Beepath</h3>
              <p className="text-sm text-muted-foreground mt-1">
                I'm a software engineer from Trinidad & Tobago, currently based
                in the UK. I'm serious about building things that people love.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link
                href="https://github.com/marcbeep"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/marcbeep"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:hi@marc.tt"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>

            {/* Other Projects */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Other Projects</h4>
              <nav className="space-y-1">
                <Link
                  href="https://marc.tt"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  My Personal Website
                </Link>
                <Link
                  href="https://code.marc.tt"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  CodeDuck - Programming Interview Prep
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by</span>
            <Link
              href="https://marc.tt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Marc Beepath
            </Link>
            <span>in Liverpool</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <span>© {new Date().getFullYear()} Dime</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
