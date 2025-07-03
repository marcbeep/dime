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
    <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl">
      <CardHeader
        className="pb-6 cursor-pointer hover:bg-slate-50/70 transition-all duration-300 group"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-4">
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-slate-600 group-hover:text-slate-800 transition-colors" />
            ) : (
              <ChevronDown className="h-5 w-5 text-slate-600 group-hover:text-slate-800 transition-colors" />
            )}
            {group.name}
            <Badge
              className="bg-gradient-to-r from-slate-100/80 to-slate-200/60 text-slate-700 hover:from-slate-200/80 hover:to-slate-300/60 font-medium border-0 px-3 py-1 rounded-xl shadow-sm"
              variant="secondary"
            >
              {formatCurrency(groupTotal)}
            </Badge>
          </CardTitle>
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-600">
            <span className="w-24 text-right">Assigned</span>
            <span className="w-24 text-right">Activity</span>
            <span className="w-28 text-right">Available</span>
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0 pb-6">
          <div className="space-y-2">
            {group.categories.map((category) => (
              <BudgetCategory key={category.name} category={category} />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
