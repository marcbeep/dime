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

  return (
    <Card className="border border-slate-200/60 shadow-sm bg-white/80 backdrop-blur-sm overflow-hidden">
      <CardHeader
        className="pb-4 cursor-pointer hover:bg-slate-50/50 transition-all duration-200 group"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-slate-900 flex items-center gap-3">
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 text-slate-600 group-hover:text-slate-800 transition-colors" />
            ) : (
              <ChevronDown className="h-4 w-4 text-slate-600 group-hover:text-slate-800 transition-colors" />
            )}
            {group.name}
            <Badge
              className="bg-slate-100 text-slate-700 hover:bg-slate-100 font-medium border-0"
              variant="secondary"
            >
              {formatCurrency(groupTotal)}
            </Badge>
          </CardTitle>
          <div className="hidden sm:flex items-center gap-6 text-xs font-medium text-slate-600">
            <span className="w-20 text-right">Assigned</span>
            <span className="w-20 text-right">Activity</span>
            <span className="w-24 text-right">Available</span>
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0 pb-4">
          <div className="space-y-1">
            {group.categories.map((category) => (
              <BudgetCategory key={category.name} category={category} />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
