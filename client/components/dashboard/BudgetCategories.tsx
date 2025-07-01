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
    <div className="space-y-4">
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
        className="w-full h-12 border-2 border-dashed border-slate-300 hover:border-slate-400 bg-transparent hover:bg-slate-50/50 text-slate-600 hover:text-slate-800 rounded-lg transition-all duration-200"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Category Group
      </Button>
    </div>
  );
}
