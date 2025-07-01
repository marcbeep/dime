import { Plus } from "lucide-react";
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

  const isNegative = readyToAssign < 0;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Add Transaction Button */}
      <div className="order-2 sm:order-1">
        <Button
          onClick={handleAddTransaction}
          className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-medium shadow-sm border-0 h-11 px-6 rounded-lg transition-all duration-200 hover:shadow-md"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </div>

      {/* Ready to Assign Card */}
      <div className="order-1 sm:order-2">
        <Card
          className={`border-0 shadow-sm ${
            isNegative
              ? "bg-gradient-to-r from-red-50 to-red-100"
              : "bg-gradient-to-r from-emerald-50 to-emerald-100"
          }`}
        >
          <CardContent className="px-6 py-4">
            <div className="text-center">
              <p
                className={`text-xs font-medium mb-1 ${
                  isNegative ? "text-red-700" : "text-emerald-700"
                }`}
              >
                Ready to Assign
              </p>
              <p
                className={`text-2xl font-bold ${
                  isNegative ? "text-red-900" : "text-emerald-900"
                }`}
              >
                {formatCurrency(readyToAssign)}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
