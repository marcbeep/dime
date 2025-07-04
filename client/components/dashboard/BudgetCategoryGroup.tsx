import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BudgetCategory } from "./BudgetCategory";
import { CategoryGroup } from "./types";
import { Badge } from "@/components/ui/badge";

interface BudgetCategoryGroupProps {
  group: CategoryGroup;
  isExpanded: boolean;
  onToggle: () => void;
}

export function BudgetCategoryGroup({
  group,
  isExpanded,
  onToggle,
}: BudgetCategoryGroupProps) {
  const groupTotal = group.categories.reduce(
    (sum, cat) => sum + cat.available,
    0
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Get badge styling based on total value (Material UI 3 design)
  const getBadgeStyling = () => {
    if (groupTotal > 0) {
      // Positive - Green (success state)
      return "bg-gradient-to-r from-brand-green to-emerald-100/80 text-brand-green-foreground hover:from-emerald-200/80 hover:to-emerald-300/60 ring-1 ring-emerald-200/50";
    } else if (groupTotal < 0) {
      // Negative - Red (error state)
      return "bg-gradient-to-r from-brand-red to-red-100/80 text-brand-red-foreground hover:from-red-200/80 hover:to-red-300/60 ring-1 ring-red-200/50";
    } else {
      // Zero - Neutral (default state)
      return "bg-gradient-to-r from-slate-100/80 to-slate-200/60 text-slate-700 hover:from-slate-200/80 hover:to-slate-300/60 ring-1 ring-slate-200/50";
    }
  };

  return (
    <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl min-h-[120px] min-w-[300px]">
      <CardHeader
        className="pb-6 cursor-pointer hover:bg-slate-50/70 transition-all duration-300 group"
        onClick={onToggle}
      >
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-4 min-w-0">
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-slate-600 group-hover:text-slate-800 transition-colors flex-shrink-0" />
          ) : (
            <ChevronDown className="h-5 w-5 text-slate-600 group-hover:text-slate-800 transition-colors flex-shrink-0" />
          )}
          <span className="truncate">{group.name}</span>
          <Badge
            className={`${getBadgeStyling()} font-medium border-0 px-3 py-1 rounded-xl shadow-sm transition-all duration-300 transform hover:scale-[1.02] flex-shrink-0 min-w-[80px]`}
            variant="secondary"
          >
            {formatCurrency(groupTotal)}
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent
        className={`pt-0 pb-6 transition-all duration-300 ease-in-out ${
          isExpanded
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden pb-0"
        }`}
      >
        <div className="space-y-2 min-w-0">
          {group.categories.map((category) => (
            <BudgetCategory key={category.name} category={category} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
