import { MonthSelector } from "./MonthSelector";
import { BudgetCategories } from "./BudgetCategories";
import { CategoryGroup } from "./types";

interface MainContentProps {
  selectedMonth: string;
  readyToAssign: number;
  categoryGroups: CategoryGroup[];
  expandedCategories: string[];
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onToggleCategory: (categoryId: string) => void;
}

export function MainContent({
  selectedMonth,
  readyToAssign,
  categoryGroups,
  expandedCategories,
  onPreviousMonth,
  onNextMonth,
  onToggleCategory,
}: MainContentProps) {
  return (
    <div className="lg:col-span-3">
      <div className="space-y-6">
        <MonthSelector
          selectedMonth={selectedMonth}
          readyToAssign={readyToAssign}
          onPreviousMonth={onPreviousMonth}
          onNextMonth={onNextMonth}
        />
        <BudgetCategories
          categoryGroups={categoryGroups}
          expandedCategories={expandedCategories}
          onToggleCategory={onToggleCategory}
        />
      </div>
    </div>
  );
}
