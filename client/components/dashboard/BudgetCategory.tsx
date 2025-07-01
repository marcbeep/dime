import { Badge } from "@/components/ui/badge";
import { Category } from "./types";

interface BudgetCategoryProps {
  category: Category;
}

export function BudgetCategory({ category }: BudgetCategoryProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="flex items-center justify-between p-3 lg:p-4 rounded-2xl hover:bg-slate-50 transition-colors">
      <div className="flex-1 min-w-0">
        <span className="font-medium text-slate-900 text-sm lg:text-base">
          {category.name}
        </span>
      </div>
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 text-xs lg:text-sm">
        <span className="w-12 sm:w-16 lg:w-20 text-right font-medium text-slate-700">
          {category.assigned > 0
            ? formatCurrency(category.assigned).replace("£", "£")
            : "-"}
        </span>
        <span className="w-12 sm:w-16 lg:w-20 text-right font-medium text-slate-700 hidden sm:inline">
          {category.activity > 0
            ? formatCurrency(category.activity).replace("£", "£")
            : "-"}
        </span>
        <div className="w-16 sm:w-20 lg:w-24 text-right">
          <Badge
            variant={category.available > 0 ? "default" : "secondary"}
            className={`text-xs ${
              category.available > 0
                ? "bg-green-100 text-green-800 hover:bg-green-100"
                : ""
            }`}
          >
            {formatCurrency(category.available).replace("£", "£")}
          </Badge>
        </div>
      </div>
    </div>
  );
}
