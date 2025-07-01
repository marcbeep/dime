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
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50/50 transition-all duration-200 group">
      <div className="flex-1 min-w-0">
        <span className="font-medium text-slate-800 text-sm group-hover:text-slate-900 transition-colors">
          {category.name}
        </span>
      </div>
      <div className="flex items-center gap-6 text-xs">
        <span className="w-16 sm:w-20 text-right font-medium text-slate-600">
          {category.assigned > 0 ? formatCurrency(category.assigned) : "—"}
        </span>
        <span className="w-16 sm:w-20 text-right font-medium text-slate-600 hidden sm:inline">
          {category.activity > 0 ? formatCurrency(category.activity) : "—"}
        </span>
        <div className="w-20 sm:w-24 text-right">
          <Badge
            variant={category.available > 0 ? "default" : "secondary"}
            className={`text-xs font-medium border-0 ${
              category.available > 0
                ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                : "bg-slate-100 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {formatCurrency(category.available)}
          </Badge>
        </div>
      </div>
    </div>
  );
}
