import {
  BudgetData,
  BudgetCalculations,
  Account,
  CategoryGroup,
} from "../components/dashboard/types";
import mockData from "./mockdata.json";

/**
 * Simulates fetching budget data from an API
 * In a real app, this would be an actual API call
 */
export async function fetchBudgetData(): Promise<BudgetData> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // In a real app, this would be:
  // const response = await fetch('/api/budget');
  // return response.json();

  return mockData as BudgetData;
}

/**
 * Calculates budget totals and financial metrics
 * These calculations might be done on the backend in a real app
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

  // Calculate total available across all categories
  const totalAvailable = categoryGroups.reduce(
    (sum, group) =>
      sum +
      group.categories.reduce((groupSum, cat) => groupSum + cat.available, 0),
    0
  );

  // Ready to assign = total budgetable money - money allocated to categories
  const readyToAssign = totalBudgetable - totalAvailable;

  // Net worth = assets - debts (budgetable accounts are typically checking accounts, not counted as assets)
  const netWorth = totalAssets - totalDebts;

  return {
    totalBudgetable,
    totalAvailable,
    readyToAssign,
    totalAssets,
    totalDebts,
    netWorth,
  };
}

/**
 * Gets the default expanded categories from the mock data
 */
export function getDefaultExpandedCategories(
  categoryGroups: CategoryGroup[]
): string[] {
  return categoryGroups
    .filter((group) => group.isExpanded)
    .map((group) => group.id);
}

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
 * Gets user's display name
 */
export function getUserDisplayName(user: {
  name: string;
  email: string;
}): string {
  return user.name || user.email.split("@")[0];
}
