import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export formatCurrency from budget-utils for backwards compatibility
export { formatCurrency as formatAmount } from "./budget-utils";
