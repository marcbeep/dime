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
    <Card className="overflow-hidden rounded-2xl">
      <CardHeader
        className="pb-3 cursor-pointer hover:bg-slate-50 transition-colors rounded-t-2xl"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-base lg:text-lg text-slate-900 flex items-center gap-2">
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 lg:h-5 lg:w-5" />
            ) : (
              <ChevronDown className="h-4 w-4 lg:h-5 lg:w-5" />
            )}
            {group.name}
            <Badge
              className="ml-2 bg-blue-100 text-blue-800 font-bold"
              variant="secondary"
            >
              {formatCurrency(groupTotal)}
            </Badge>
          </CardTitle>
          <div className="hidden sm:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm font-medium text-slate-600">
            <span className="w-16 lg:w-20 text-right">Assigned</span>
            <span className="w-16 lg:w-20 text-right">Activity</span>
            <span className="w-20 lg:w-24 text-right">Available</span>
          </div>
        </div>
      </CardHeader>

      {isExpanded && (
        <CardContent className="pt-0">
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
