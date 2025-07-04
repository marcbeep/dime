export interface Category {
  id: string;
  name: string;
  available: number;
  status: string;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryGroup {
  id: string;
  name: string;
  sortOrder: number;
  isExpanded: boolean;
  createdAt: string;
  updatedAt: string;
  categories: Category[];
}

export interface Account {
  id: string;
  name: string;
  balance: number;
  color: string;
  type: "account" | "asset" | "debt";
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  currency: string;
  timezone: string;
  createdAt: string;
  updatedAt: string;
}

export interface Budget {
  id: string;
  userId: string;
  month: string;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  accountId: string;
  date: string;
  payee: string;
  category: string | null;
  amount: number;
  type: "inflow" | "outflow";
  createdAt: string;
}

export interface BudgetData {
  user: User;
  accounts: Account[];
  categoryGroups: CategoryGroup[];
  budget: Budget;
  transactions: Transaction[];
  meta: {
    version: string;
    lastSync: string;
    currency: string;
  };
}

export interface BudgetCalculations {
  totalBudgetable: number;
  totalAvailable: number;
  readyToAssign: number;
  totalAssets: number;
  totalDebts: number;
  netWorth: number;
}
