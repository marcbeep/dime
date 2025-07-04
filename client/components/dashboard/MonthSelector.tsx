import { Plus, DollarSign, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/budget-utils";

interface MonthSelectorProps {
  readyToAssign: number;
}

export function MonthSelector({ readyToAssign }: MonthSelectorProps) {
  const handleAddTransaction = () => {
    // TODO: Implement add transaction logic
    console.log("Add transaction");
  };

  const handleAssignMoney = () => {
    // TODO: Implement assign money logic
    console.log("Assign money to categories");
  };

  const handleUnassignMoney = () => {
    // TODO: Implement unassign money logic
    console.log("Unassign money from categories");
  };

  const isNegative = readyToAssign < 0;
  const isZero = readyToAssign === 0;
  const isPositive = readyToAssign > 0;

  // Get card styling based on state
  const getCardStyling = () => {
    if (isNegative) {
      return "bg-gradient-to-br from-red-50/90 to-red-100/80 ring-2 ring-red-200/60";
    } else if (isPositive) {
      return "bg-gradient-to-br from-emerald-50/90 to-emerald-100/80 ring-2 ring-emerald-200/60";
    } else {
      return "bg-gradient-to-br from-slate-50/90 to-slate-100/80 ring-2 ring-slate-200/60";
    }
  };

  const getTextStyling = () => {
    if (isNegative) {
      return { label: "text-red-700", amount: "text-red-900" };
    } else if (isPositive) {
      return { label: "text-emerald-700", amount: "text-emerald-900" };
    } else {
      return { label: "text-slate-700", amount: "text-slate-900" };
    }
  };

  const textStyles = getTextStyling();

  return (
    <div className="space-y-4">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <Button
          onClick={handleAddTransaction}
          className="w-full sm:w-auto bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium shadow-md hover:shadow-lg border-0 h-10 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </div>

      {/* Ready to Assign Card - Compact */}
      <Card
        className={`border-0 shadow-sm rounded-2xl overflow-hidden ${getCardStyling()}`}
      >
        <CardContent className="p-4 lg:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Amount Display */}
            <div className="flex-1 text-center sm:text-left">
              <p
                className={`text-xs font-medium mb-1 ${textStyles.label} uppercase tracking-wide`}
              >
                Ready to Assign
              </p>
              <p
                className={`text-2xl lg:text-3xl font-bold ${textStyles.amount}`}
              >
                {formatCurrency(readyToAssign)}
              </p>
              {isNegative && (
                <p className="text-xs text-red-600 mt-1 font-medium">
                  You&apos;ve assigned more than you have available
                </p>
              )}
              {isZero && (
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  Perfect! Every dollar is assigned
                </p>
              )}
              {isPositive && (
                <p className="text-xs text-emerald-600 mt-1 font-medium">
                  You have money ready to be assigned
                </p>
              )}
            </div>

            {/* Action Button */}
            <div className="flex justify-center sm:justify-end">
              {isNegative && (
                <Button
                  onClick={handleUnassignMoney}
                  variant="outline"
                  className="bg-white/90 border border-red-200 hover:border-red-300 hover:bg-red-50/50 text-red-700 hover:text-red-800 font-medium h-9 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <Minus className="h-4 w-4 mr-2" />
                  Unassign from Categories
                </Button>
              )}
              {isPositive && (
                <Button
                  onClick={handleAssignMoney}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium h-9 px-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Assign Money
                </Button>
              )}
              {isZero && (
                <div className="flex items-center justify-center h-9 px-4 bg-white/90 rounded-xl border border-slate-200 text-slate-600 font-medium text-sm">
                  <span className="mr-2">✨</span>
                  All Set!
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
