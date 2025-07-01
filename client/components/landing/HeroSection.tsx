import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left px-4 sm:px-0 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-slide-up font-outfit">
            Dime makes it easy to budget, track, and take control of your money
          </h1>

          <div className="text-4xl lg:text-5xl font-bold mb-8 space-y-2 animate-slide-up animation-delay-200 font-outfit">
            <div className="flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg flex items-center transform hover:scale-105 transition-transform duration-200 font-medium">
                <span className="mr-2">💰</span>
                budget
              </span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-lg flex items-center transform hover:scale-105 transition-transform duration-200 font-medium">
                <span className="mr-2">📊</span>
                track
              </span>
              <span className="text-gray-900">&</span>
            </div>
            <div>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg flex items-center inline-flex transform hover:scale-105 transition-transform duration-200 font-medium">
                <span className="mr-2">🎯</span>
                achieve
              </span>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-slide-up animation-delay-400 font-normal">
            Master zero-based budgeting where every dollar has a purpose. Track
            expenses, set goals, and build wealth with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white transform hover:scale-105 transition-all duration-200 font-semibold"
            >
              Start Budgeting Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Modern Notification Cards - All Devices */}
        <div className="relative animate-fade-in animation-delay-300">
          <div className="relative flex justify-center">
            {/* Background decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-100 rounded-full opacity-50 animate-float hidden lg:block"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-100 rounded-full opacity-50 animate-float animation-delay-1000 hidden lg:block"></div>
            <div className="absolute top-1/2 -right-4 w-16 h-16 bg-green-100 rounded-full opacity-50 animate-float animation-delay-2000 hidden lg:block"></div>

            {/* Main Activity Card Container - Square and Responsive */}
            <div className="relative">
              <div className="w-96 h-96 lg:w-[480px] lg:h-[480px] bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-6 lg:p-8 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-green-300 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-300 rounded-full animate-pulse animation-delay-500"></div>
                  <div className="absolute top-1/2 right-20 w-12 h-12 bg-purple-300 rounded-full animate-pulse animation-delay-1000"></div>
                </div>

                {/* Notification Cards */}
                <div className="relative z-10 space-y-3 lg:space-y-4">
                  {/* Card 1 - Recent spending */}
                  <div className="bg-white rounded-xl shadow-sm border p-3 lg:p-4 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-left animation-delay-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">🚆</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">
                          £40 spent on Trainline
                        </p>
                        <p className="text-xs lg:text-sm text-gray-500 font-normal">
                          Transport • 2 hours ago
                        </p>
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-red-600 flex-shrink-0">
                        -£40.00
                      </div>
                    </div>
                  </div>

                  {/* Card 2 - Grocery spending */}
                  <div className="bg-white rounded-xl shadow-sm border p-3 lg:p-4 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-right animation-delay-1000">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">🛒</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">
                          £85 spent at Tesco
                        </p>
                        <p className="text-xs lg:text-sm text-gray-500 font-normal">
                          Groceries • 4 hours ago
                        </p>
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-red-600 flex-shrink-0">
                        -£85.00
                      </div>
                    </div>
                  </div>

                  {/* Card 3 - Income */}
                  <div className="bg-white rounded-xl shadow-sm border p-3 lg:p-4 transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-left animation-delay-1200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">💼</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">
                          Salary received
                        </p>
                        <p className="text-xs lg:text-sm text-gray-500 font-normal">
                          Income • Yesterday
                        </p>
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-green-600 flex-shrink-0">
                        +£2,500.00
                      </div>
                    </div>
                  </div>

                  {/* Card 4 - Subscription */}
                  <div className="bg-white rounded-xl shadow-sm border p-3 lg:p-4 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-right animation-delay-1400">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">📺</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">
                          £12.99 Netflix subscription
                        </p>
                        <p className="text-xs lg:text-sm text-gray-500 font-normal">
                          Entertainment • 2 days ago
                        </p>
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-red-600 flex-shrink-0">
                        -£12.99
                      </div>
                    </div>
                  </div>

                  {/* Card 5 - Coffee */}
                  <div className="bg-white rounded-xl shadow-sm border p-3 lg:p-4 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 animate-slide-in-left animation-delay-1600">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg">☕</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm lg:text-base">
                          £4.50 at Starbucks
                        </p>
                        <p className="text-xs lg:text-sm text-gray-500 font-normal">
                          Food & Drink • 3 days ago
                        </p>
                      </div>
                      <div className="text-sm lg:text-base font-semibold text-red-600 flex-shrink-0">
                        -£4.50
                      </div>
                    </div>
                  </div>
                </div>

                {/* Budget Summary at bottom */}
                <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 animate-slide-up animation-delay-1800">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-white/50 hover:bg-white/90 transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <span className="text-xs lg:text-sm font-semibold text-gray-700">
                        This month
                      </span>
                      <span className="text-xs lg:text-sm font-bold text-green-600">
                        £1,200 under budget
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
