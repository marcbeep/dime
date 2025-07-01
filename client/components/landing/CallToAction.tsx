import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="mb-12">
      <Button
        variant="outline"
        className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
      >
        <span className="mr-2">✨</span>
        See how it works!
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
