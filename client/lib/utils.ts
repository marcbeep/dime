import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates a DiceBear avatar URL using the user's email as a seed
 * @param email - User's email address
 * @param size - Size of the avatar (default: 80)
 * @returns DiceBear avatar URL
 *
 * Example: getDiceBearAvatar("john.doe@university.edu", 80)
 * Returns: "https://api.dicebear.com/9.x/dylan/svg?seed=john.doe%40university.edu&size=80&radius=50"
 */
export function getDiceBearAvatar(email: string, size: number = 80): string {
  const seed = encodeURIComponent(email);
  return `https://api.dicebear.com/9.x/dylan/svg?seed=${seed}&size=${size}&radius=50`;
}

// Re-export formatCurrency from budget-utils for backwards compatibility
export { formatCurrency as formatAmount } from "./budget-utils";
