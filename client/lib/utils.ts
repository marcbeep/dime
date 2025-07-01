import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simple GBP currency formatter
export function formatAmount(amount: number): string {
  return `£${amount.toFixed(2)}`;
}
