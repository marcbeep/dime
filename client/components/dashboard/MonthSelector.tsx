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
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      {/* Add Transaction Button */}
      <div className="order-2 sm:order-1">
        <Button
          onClick={handleAddTransaction}
          className="w-full sm:w-auto bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium shadow-lg hover:shadow-xl border-0 h-12 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5"
        >
          <Plus className="h-5 w-5 mr-3" />
          Add Transaction
        </Button>
      </div>

      {/* Ready to Assign Card */}
      <div className="order-1 sm:order-2">
        <Card
          className={`border-0 shadow-lg rounded-3xl overflow-hidden ${
            isNegative
              ? "bg-gradient-to-br from-red-50/90 to-red-100/80 ring-2 ring-red-200/60"
              : "bg-gradient-to-br from-emerald-50/90 to-emerald-100/80 ring-2 ring-emerald-200/60"
          }`}
        >
          <CardContent className="px-8 py-6">
            <div className="text-center">
              <p
                className={`text-sm font-medium mb-2 ${
                  isNegative ? "text-red-700" : "text-emerald-700"
                }`}
              >
                Ready to Assign
              </p>
              <p
                className={`text-3xl font-bold ${
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
