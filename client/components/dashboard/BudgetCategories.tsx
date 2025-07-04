import { BudgetCategoryGroup } from "./BudgetCategoryGroup";
import { CategoryGroup } from "./types";

interface BudgetCategoriesProps {
  categoryGroups: CategoryGroup[];
  expandedCategories: string[];
  onToggleCategory: (categoryId: string) => void;
}

export function BudgetCategories({
  categoryGroups,
  expandedCategories,
  onToggleCategory,
}: BudgetCategoriesProps) {
  return (
    <div className="space-y-4 min-w-[300px] w-full">
      {categoryGroups.map((group) => (
        <BudgetCategoryGroup
          key={group.id}
          group={group}
          isExpanded={expandedCategories.includes(group.id)}
          onToggle={() => onToggleCategory(group.id)}
        />
      ))}
    </div>
  );
}
