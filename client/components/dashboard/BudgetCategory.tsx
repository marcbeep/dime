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
    <div className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-slate-50/50 to-slate-100/30 hover:from-slate-100/70 hover:to-slate-200/50 transition-all duration-300 group hover:shadow-md transform hover:scale-[1.01] border border-slate-200/30 min-w-[280px]">
      <div className="flex-1 min-w-0 mr-4">
        <span className="font-medium text-slate-800 text-sm group-hover:text-slate-900 transition-colors truncate block">
          {category.name}
        </span>
      </div>
      <div className="flex items-center flex-shrink-0">
        <Badge
          variant={category.available > 0 ? "default" : "secondary"}
          className={`text-sm font-medium border-0 px-3 py-1 rounded-xl shadow-sm min-w-[80px] text-center ${
            category.available > 0
              ? "bg-gradient-to-r from-emerald-100/80 to-emerald-200/60 text-emerald-800 hover:from-emerald-200/80 hover:to-emerald-300/60"
              : "bg-gradient-to-r from-slate-100/80 to-slate-200/60 text-slate-600 hover:from-slate-200/80 hover:to-slate-300/60"
          }`}
        >
          {formatCurrency(category.available)}
        </Badge>
      </div>
    </div>
  );
}
