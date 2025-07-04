import {
  ArrowRight,
  Coins,
  BarChart3,
  Target,
  Train,
  ShoppingCart,
  Briefcase,
  Tv,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/budget-utils";

export function HeroSection() {
  return (
    <div className="w-full overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div className="text-left animate-fade-in">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 animate-slide-up font-outfit">
            Dime makes it easy peasy lemon squeezy to
          </h1>

          <div className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-8 space-y-3 animate-slide-up animation-delay-200 font-outfit">
            <div className="flex items-center space-x-3 flex-wrap gap-y-3">
              <span className="bg-gradient-to-r from-brand-blue to-brand-blue/80 text-white px-3 py-2 rounded-2xl flex items-center transform hover:scale-105 transition-transform duration-300 font-medium shadow-lg">
                <Coins className="mr-2 h-5 w-5" />
                budget
              </span>
              <span className="bg-gradient-to-r from-brand-green to-brand-green/80 text-white px-3 py-2 rounded-2xl flex items-center transform hover:scale-105 transition-transform duration-300 font-medium shadow-lg">
                <BarChart3 className="mr-2 h-5 w-5" />
                track
              </span>
              <span className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl">
                &
              </span>
            </div>
            <div>
              <span className="bg-gradient-to-r from-brand-purple to-brand-purple/80 text-white px-3 py-2 rounded-2xl flex items-center inline-flex transform hover:scale-105 transition-transform duration-300 font-medium shadow-lg">
                <Target className="mr-2 h-5 w-5" />
                achieve
              </span>
            </div>
          </div>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed animate-slide-up animation-delay-400 font-normal">
            Every dollar has a purpose. Never be scared of your personal
            finances again, ever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
            <Button
              size="lg"
              className="transform hover:scale-105 transition-all duration-300 font-semibold h-12 px-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start Budgeting for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="transform hover:scale-105 transition-all duration-300 font-semibold h-12 px-6 rounded-2xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50/70 shadow-sm hover:shadow-md"
              asChild
            >
              <a
                href="https://marc.tt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Made with <Heart className="mx-2 h-4 w-4 text-red-500" /> by
                Marc
              </a>
            </Button>
          </div>
        </div>

        {/* Modern Transaction Cards */}
        <div className="relative animate-fade-in animation-delay-300">
          <div className="relative flex justify-center">
            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-yellow/30 rounded-full opacity-80 animate-float hidden lg:block blur-sm"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-brand-blue/30 rounded-full opacity-80 animate-float animation-delay-1000 hidden lg:block blur-sm"></div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-brand-green/30 rounded-full opacity-80 animate-float animation-delay-2000 hidden lg:block blur-sm"></div>

            {/* Main Activity Card Container */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="w-full max-w-sm mx-auto h-[520px] sm:max-w-md lg:max-w-lg lg:h-[520px] bg-gradient-to-br from-brand-green/90 to-brand-blue/90 rounded-3xl p-6 lg:p-8 relative overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-2xl">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-12 left-12 w-20 h-20 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute bottom-24 right-12 w-16 h-16 bg-white rounded-full animate-pulse animation-delay-500"></div>
                  <div className="absolute top-1/2 right-24 w-12 h-12 bg-white rounded-full animate-pulse animation-delay-1000"></div>
                </div>

                {/* Transaction Cards */}
                <div className="relative z-10 space-y-4 group h-full flex flex-col justify-center">
                  {/* Card 1 - Recent spending */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-4 transform -rotate-1 hover:rotate-0 group-hover:scale-95 transition-all duration-300 hover:scale-105 animate-slide-in-left animation-delay-800 hover:shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-brand-red to-brand-red/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Train className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 text-sm">
                          Train to London
                        </p>
                        <p className="text-xs text-slate-500 font-medium">
                          Transport • 2 hours ago
                        </p>
                      </div>
                      <div className="text-sm font-bold text-red-600 flex-shrink-0">
                        -{formatCurrency(40)}
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Grocery spending */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-4 transform rotate-1 hover:rotate-0 group-hover:scale-95 transition-all duration-300 hover:scale-105 animate-slide-in-right animation-delay-1000 hover:shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-brand-green to-brand-green/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <ShoppingCart className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 text-sm">
                          Groceries at Tesco
                        </p>
                        <p className="text-xs text-slate-500 font-medium">
                          Groceries • 4 hours ago
                        </p>
                      </div>
                      <div className="text-sm font-bold text-red-600 flex-shrink-0">
                        -{formatCurrency(85)}
                      </div>
                    </div>
                  </div>

                  {/* Card 3 - Income */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-4 transform -rotate-1 hover:rotate-0 group-hover:scale-95 transition-all duration-300 hover:scale-105 animate-slide-in-left animation-delay-1200 hover:shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-brand-blue to-brand-blue/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 text-sm">
                          Salary
                        </p>
                        <p className="text-xs text-slate-500 font-medium">
                          Income • Yesterday
                        </p>
                      </div>
                      <div className="text-sm font-bold text-emerald-600 flex-shrink-0">
                        +{formatCurrency(2500)}
                      </div>
                    </div>
                  </div>

                  {/* Card 4 - Subscription */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-4 transform rotate-2 hover:rotate-0 group-hover:scale-95 transition-all duration-300 hover:scale-105 animate-slide-in-right animation-delay-1400 hover:shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-brand-purple to-brand-purple/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Tv className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-900 text-sm">
                          Netflix Subscription
                        </p>
                        <p className="text-xs text-slate-500 font-medium">
                          Entertainment • 2 days ago
                        </p>
                      </div>
                      <div className="text-sm font-bold text-red-600 flex-shrink-0">
                        -{formatCurrency(12.99)}
                      </div>
                    </div>
                  </div>

                  {/* Budget Summary at bottom */}
                  <div className="mt-6 animate-slide-up animation-delay-1800">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 border border-white/30 hover:bg-white/95 transition-all duration-300 shadow-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-slate-600">
                          This month
                        </span>
                        <span className="text-sm font-bold text-emerald-600">
                          {formatCurrency(1200)} under budget
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
    </div>
  );
}
