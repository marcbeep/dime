import { Plus, DollarSign, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface MonthSelectorProps {
  readyToAssign: number;
}

export function MonthSelector({ readyToAssign }: MonthSelectorProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(amount);
  };

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
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <Button
          onClick={handleAddTransaction}
          className="w-full sm:w-auto bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium shadow-lg hover:shadow-xl border-0 h-12 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5"
        >
          <Plus className="h-5 w-5 mr-3" />
          Add Transaction
        </Button>

        {/* Month Navigation - Could be added later */}
        <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
          <span className="font-medium">December 2024</span>
        </div>
      </div>

      {/* Ready to Assign Card - Full Width */}
      <Card
        className={`border-0 shadow-lg rounded-3xl overflow-hidden ${getCardStyling()}`}
      >
        <CardContent className="p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Amount Display */}
            <div className="text-center lg:text-left">
              <p className={`text-sm font-medium mb-2 ${textStyles.label}`}>
                Ready to Assign
              </p>
              <p
                className={`text-4xl lg:text-5xl font-bold ${textStyles.amount}`}
              >
                {formatCurrency(readyToAssign)}
              </p>
              {isNegative && (
                <p className="text-sm text-red-600 mt-2 font-medium">
                  You've assigned more than you have available
                </p>
              )}
              {isZero && (
                <p className="text-sm text-slate-600 mt-2 font-medium">
                  Perfect! Every dollar is assigned
                </p>
              )}
              {isPositive && (
                <p className="text-sm text-emerald-600 mt-2 font-medium">
                  You have money ready to be assigned
                </p>
              )}
            </div>

            {/* Action Button */}
            <div className="flex justify-center lg:justify-end">
              {isNegative && (
                <Button
                  onClick={handleUnassignMoney}
                  variant="outline"
                  className="bg-white/90 border-2 border-red-200 hover:border-red-300 hover:bg-red-50/50 text-red-700 hover:text-red-800 font-medium h-12 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
                >
                  <Minus className="h-4 w-4 mr-2" />
                  Unassign from Categories
                </Button>
              )}
              {isPositive && (
                <Button
                  onClick={handleAssignMoney}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium h-12 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Assign Money
                </Button>
              )}
              {isZero && (
                <div className="flex items-center justify-center h-12 px-6 bg-white/90 rounded-2xl border-2 border-slate-200 text-slate-600 font-medium">
                  <span className="text-lg mr-2">✨</span>
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
