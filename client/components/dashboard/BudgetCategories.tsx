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
    <div className="space-y-6">
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
        className="w-full h-14 border-3 border-dashed border-slate-300 hover:border-slate-400 bg-transparent hover:bg-slate-50/70 text-slate-600 hover:text-slate-800 rounded-2xl transition-all duration-300 transform hover:scale-[1.01] hover:shadow-md font-medium"
      >
        <Plus className="h-5 w-5 mr-3" />
        Add Category Group
      </Button>
    </div>
  );
}
