import { Account, CategoryGroup, BudgetCalculations } from "./types";

/**
 * Filters accounts by type
 */
export function filterAccountsByType(
  accounts: Account[],
  type: Account["type"]
): Account[] {
  return accounts.filter((acc) => acc.type === type && acc.isActive);
}

/**
 * Formats currency values consistently across the app
 */
export function formatCurrency(
  amount: number,
  currency: string = "GBP"
): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

/**
 * Calculates budget totals and financial metrics
 */
export function calculateBudgetMetrics(
  accounts: Account[],
  categoryGroups: CategoryGroup[]
): BudgetCalculations {
  // Filter accounts by type
  const budgetableAccounts = accounts.filter(
    (acc) => acc.type === "account" && acc.isActive
  );
  const assets = accounts.filter((acc) => acc.type === "asset" && acc.isActive);
  const debts = accounts.filter((acc) => acc.type === "debt" && acc.isActive);

  // Calculate totals
  const totalBudgetable = budgetableAccounts.reduce(
    (sum, acc) => sum + acc.balance,
    0
  );
  const totalAssets = assets.reduce((sum, acc) => sum + acc.balance, 0);
  const totalDebts = Math.abs(debts.reduce((sum, acc) => sum + acc.balance, 0));

  // Calculate total assigned across all categories
  const totalAssigned = categoryGroups.reduce(
    (sum, group) =>
      sum +
      group.categories.reduce((groupSum, cat) => groupSum + cat.assigned, 0),
    0
  );

  // Ready to assign = total budgetable money - money already assigned
  const readyToAssign = totalBudgetable - totalAssigned;

  // Net worth = assets - debts
  const netWorth = totalAssets - totalDebts;

  return {
    totalBudgetable,
    totalAssigned,
    readyToAssign,
    totalAssets,
    totalDebts,
    netWorth,
  };
}

/**
 * Gets the default expanded categories
 */
export function getDefaultExpandedCategories(
  categoryGroups: CategoryGroup[]
): string[] {
  return categoryGroups
    .filter((group) => group.isExpanded)
    .map((group) => group.id);
}

/**
 * Gets user's display name
 */
export function getUserDisplayName(user: {
  name: string;
  email: string;
}): string {
  return user.name || user.email.split("@")[0];
}
