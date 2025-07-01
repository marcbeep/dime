import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="space-y-3 lg:space-y-4">
      {categoryGroups.map((group) => (
        <BudgetCategoryGroup
          key={group.id}
          group={group}
          isExpanded={expandedCategories.includes(group.id)}
          onToggle={() => onToggleCategory(group.id)}
        />
      ))}

      {/* Add Category Button */}
      <Button
        variant="outline"
        className="w-full h-12 border-dashed border-2 hover:border-solid bg-transparent rounded-2xl"
      >
        <Plus className="h-5 w-5 mr-2" />
        Add Category Group
      </Button>
    </div>
  );
}
