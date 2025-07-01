export interface Category {
  name: string;
  assigned: number;
  activity: number;
  available: number;
  status: string;
}

export interface CategoryGroup {
  id: string;
  name: string;
  categories: Category[];
}

export interface Account {
  name: string;
  balance: number;
  color: string;
}
