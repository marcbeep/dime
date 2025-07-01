import {
  ArrowRight,
  Coins,
  BarChart3,
  Target,
  Train,
  ShoppingCart,
  Briefcase,
  Tv,
  Coffee,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatAmount } from "../../lib/utils";

export function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left px-4 sm:px-0 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6 animate-slide-up font-outfit">
            Dime makes it easy to budget, track, and take control of your money
          </h1>

          <div className="text-4xl lg:text-5xl font-bold mb-8 space-y-2 animate-slide-up animation-delay-200 font-outfit">
            <div className="flex items-center space-x-4">
              <span className="bg-brand-blue text-brand-blue-foreground px-3 py-1 rounded-lg flex items-center transform hover:scale-105 transition-transform duration-200 font-medium">
                <Coins className="mr-2 h-5 w-5" />
                budget
              </span>
              <span className="bg-brand-green text-brand-green-foreground px-3 py-1 rounded-lg flex items-center transform hover:scale-105 transition-transform duration-200 font-medium">
                <BarChart3 className="mr-2 h-5 w-5" />
                track
              </span>
              <span className="text-primary">&</span>
            </div>
            <div>
              <span className="bg-brand-purple text-brand-purple-foreground px-3 py-1 rounded-lg flex items-center inline-flex transform hover:scale-105 transition-transform duration-200 font-medium">
                <Target className="mr-2 h-5 w-5" />
                achieve
              </span>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-up animation-delay-400 font-normal">
            Master zero-based budgeting where every dollar has a purpose. Track
            expenses, set goals, and build wealth with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
            <Button
              size="lg"
              className="transform hover:scale-105 transition-all duration-200 font-semibold"
            >
              Start Budgeting Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="transform hover:scale-105 transition-all duration-200 font-semibold"
              asChild
            >
              <a
                href="https://marc.tt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Made with <Heart /> by Marc
              </a>
            </Button>
          </div>
        </div>

        {/* Modern Notification Cards - All Devices */}
        <div className="relative animate-fade-in animation-delay-300">
          <div className="relative flex justify-center">
            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-yellow rounded-full opacity-50 animate-float hidden lg:block"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-brand-blue rounded-full opacity-50 animate-float animation-delay-1000 hidden lg:block"></div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-brand-green rounded-full opacity-50 animate-float animation-delay-2000 hidden lg:block"></div>

            {/* Main Activity Card Container - Square and Responsive */}
            <div className="relative overflow-hidden">
              <div className="w-96 h-96 lg:w-[480px] lg:h-[480px] bg-gradient-to-br from-brand-green to-brand-blue rounded-3xl p-6 lg:p-8 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-brand-green-foreground rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 right-10 w-16 h-16 bg-brand-blue-foreground rounded-full animate-pulse animation-delay-500"></div>
                  <div className="absolute top-1/2 right-20 w-12 h-12 bg-brand-purple-foreground rounded-full animate-pulse animation-delay-1000"></div>
                </div>

                {/* Notification Cards */}
                <div className="relative z-10 space-y-3 lg:space-y-4">
                  {/* Card 1 - Recent spending */}
                  <div className="bg-white rounded-xl shadow-sm border p-3 lg:p-4 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-left animation-delay-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                        <Train className="h-5 w-5 text-brand-red-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-primary text-sm lg:text-base">
                          Train to London
                        </p>
                        <p className="text-xs lg:text-sm text-muted-foreground font-normal">
                          Transport • 2 hours ago
                        </p>
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-destructive flex-shrink-0">
                        -{formatAmount(40)}
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Grocery spending */}
                  <div className="bg-white rounded-xl shadow-sm border p-3 lg:p-4 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-right animation-delay-1000">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                        <ShoppingCart className="h-5 w-5 text-brand-green-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-primary text-sm lg:text-base">
                          Groceries at Tesco
                        </p>
                        <p className="text-xs lg:text-sm text-muted-foreground font-normal">
                          Groceries • 4 hours ago
                        </p>
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-destructive flex-shrink-0">
                        -{formatAmount(85)}
                      </div>
                    </div>
                  </div>

                  {/* Card 3 - Income */}
                  <div className="bg-white rounded-xl shadow-sm border p-3 lg:p-4 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-left animation-delay-1200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-5 w-5 text-brand-blue-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-primary text-sm lg:text-base">
                          Salary
                        </p>
                        <p className="text-xs lg:text-sm text-muted-foreground font-normal">
                          Income • Yesterday
                        </p>
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-success flex-shrink-0">
                        +{formatAmount(2500)}
                      </div>
                    </div>
                  </div>

                  {/* Card 4 - Subscription */}
                  <div className="bg-white rounded-xl shadow-sm border p-3 lg:p-4 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-right animation-delay-1400">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0">
                        <Tv className="h-5 w-5 text-brand-purple-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-primary text-sm lg:text-base">
                          Netflix Subscription
                        </p>
                        <p className="text-xs lg:text-sm text-muted-foreground font-normal">
                          Entertainment • 2 days ago
                        </p>
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-destructive flex-shrink-0">
                        -{formatAmount(12.99)}
                      </div>
                    </div>
                  </div>

                  {/* Card 5 - Coffee */}
                  <div className="bg-white rounded-xl shadow-sm border p-3 lg:p-4 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-left animation-delay-1600">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center flex-shrink-0">
                        <Coffee className="h-5 w-5 text-brand-yellow-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-primary text-sm lg:text-base">
                          Coffee at Starbucks
                        </p>
                        <p className="text-xs lg:text-sm text-muted-foreground font-normal">
                          Food & Drink • 3 days ago
                        </p>
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-destructive flex-shrink-0">
                        -{formatAmount(4.5)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Budget Summary at bottom */}
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 animate-slide-up animation-delay-1800">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-white/50 hover:bg-white/90 transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <span className="text-xs lg:text-sm font-semibold text-muted-foreground">
                        This month
                      </span>
                      <span className="text-xs lg:text-sm font-bold text-success">
                        {formatAmount(1200)} under budget
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
