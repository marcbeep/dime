import { MonthSelector } from "./MonthSelector";
import { BudgetCategories } from "./BudgetCategories";
import { CategoryGroup } from "./types";

interface MainContentProps {
  readyToAssign: number;
  categoryGroups: CategoryGroup[];
  expandedCategories: string[];
  onToggleCategory: (categoryId: string) => void;
}

export function MainContent({
  readyToAssign,
  categoryGroups,
  expandedCategories,
  onToggleCategory,
}: MainContentProps) {
  return (
    <div className="space-y-8">
      <MonthSelector readyToAssign={readyToAssign} />
      <BudgetCategories
        categoryGroups={categoryGroups}
        expandedCategories={expandedCategories}
        onToggleCategory={onToggleCategory}
      />
    </div>
  );
}
