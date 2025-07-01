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
    <div className="flex items-center justify-between p-4 rounded-lg hover:bg-slate-50 transition-colors">
      <div className="flex-1">
        <span className="font-medium text-slate-900">{category.name}</span>
      </div>
      <div className="flex items-center gap-6 text-sm">
        <span className="w-20 text-right font-medium text-slate-700">
          {category.assigned > 0 ? formatCurrency(category.assigned) : "-"}
        </span>
        <span className="w-20 text-right font-medium text-slate-700">
          {category.activity > 0 ? formatCurrency(category.activity) : "-"}
        </span>
        <div className="w-24 text-right">
          <Badge
            variant={category.available > 0 ? "default" : "secondary"}
            className={
              category.available > 0
                ? "bg-green-100 text-green-800 hover:bg-green-100"
                : ""
            }
          >
            {formatCurrency(category.available)}
          </Badge>
        </div>
      </div>
    </div>
  );
}
