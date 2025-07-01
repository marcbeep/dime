import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BudgetCategory } from "./BudgetCategory";
import { CategoryGroup } from "./types";

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
  return (
    <Card className="overflow-hidden">
      <CardHeader
        className="pb-3 cursor-pointer hover:bg-slate-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
            {isExpanded ? (
              <ChevronDown className="h-5 w-5" />
            ) : (
              <ChevronUp className="h-5 w-5" />
            )}
            {group.name}
          </CardTitle>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <span className="w-20 text-right">Assigned</span>
            <span className="w-20 text-right">Activity</span>
            <span className="w-24 text-right">Available</span>
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
