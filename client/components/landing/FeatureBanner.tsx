import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeatureBanner() {
  return (
    <div className="mb-12">
      <div className="bg-gradient-to-r from-brand-blue/10 to-brand-green/10 border-2 border-brand-blue/20 rounded-3xl p-6 relative backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-green to-brand-green/80 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">💳</span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Smart Budgeting
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Take control of your finances with our zero-based budgeting
              approach. Every dollar has a purpose.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex bg-white/80 border-2 border-slate-200 hover:border-slate-300 hover:bg-white rounded-2xl h-10 px-6 font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-slate-600 rounded-2xl h-10 w-10 p-0 hover:bg-slate-100/70 transition-all duration-300"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="sm:hidden mt-4">
          <Button
            variant="outline"
            size="sm"
            className="w-full bg-white/80 border-2 border-slate-200 hover:border-slate-300 hover:bg-white rounded-2xl h-10 font-medium shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
