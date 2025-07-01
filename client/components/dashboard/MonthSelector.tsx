import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MonthSelectorProps {
  selectedMonth: string;
  readyToAssign: number;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

export function MonthSelector({
  selectedMonth,
  readyToAssign,
  onPreviousMonth,
  onNextMonth,
}: MonthSelectorProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 bg-transparent"
          onClick={onPreviousMonth}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900">
          {selectedMonth}
        </h2>
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 bg-transparent"
          onClick={onNextMonth}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 rounded-3xl w-full sm:w-auto">
        <CardContent className="p-4 lg:p-6">
          <div className="text-center">
            <p className="text-green-100 text-xs lg:text-sm font-medium">
              Ready to Assign
            </p>
            <p className="text-2xl lg:text-3xl font-bold">
              {formatCurrency(readyToAssign)}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
