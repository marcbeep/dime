import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="mb-16">
      <Button
        variant="outline"
        className="text-white bg-gradient-to-r from-brand-red to-brand-red/80 border-0 hover:from-brand-red/90 hover:to-brand-red/70 rounded-2xl h-12 px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
      >
        <Sparkles className="mr-3 h-5 w-5" />
        See how it works!
        <ArrowRight className="ml-3 h-5 w-5" />
      </Button>
    </div>
  );
}
