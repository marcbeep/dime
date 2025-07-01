import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeatureBanner() {
  return (
    <div className="mb-8">
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4 relative">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">💳</span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-blue-800 mb-1">
              Smart Budgeting
            </h3>
            <p className="text-blue-700 text-sm">
              Take control of your finances with our zero-based budgeting
              approach. Every dollar has a purpose.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex bg-transparent"
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="sm:hidden mt-3">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <ArrowRight className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
