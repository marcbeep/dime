import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="mb-12">
      <Button
        variant="outline"
        className="text-brand-red-foreground border-brand-red hover:bg-brand-red bg-transparent"
      >
        <Sparkles className="mr-2 h-4 w-4" />
        See how it works!
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
