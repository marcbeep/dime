import { Navigation } from "./Navigation";
import { AccountsList } from "./AccountsList";
import { Account } from "./types";
import { filterAccountsByType } from "@/lib/budget-utils";

interface SidebarProps {
  accounts: Account[];
}

export function Sidebar({ accounts }: SidebarProps) {
  // Filter accounts by type using centralized utility
  const regularAccounts = filterAccountsByType(accounts, "account");
  const assets = filterAccountsByType(accounts, "asset");
  const debts = filterAccountsByType(accounts, "debt");

  return (
    <div className="hidden lg:block">
      <div className="space-y-8">
        <Navigation />

        {/* Regular budgetable accounts */}
        {regularAccounts.length > 0 && (
          <AccountsList
            accounts={regularAccounts}
            title="Accounts"
            showAddButton={true}
          />
        )}

        {/* Assets (non-budgetable but addable) */}
        {assets.length > 0 && (
          <AccountsList accounts={assets} title="Assets" showAddButton={true} />
        )}

        {/* Debts (addable) */}
        {debts.length > 0 && (
          <AccountsList accounts={debts} title="Debts" showAddButton={true} />
        )}
      </div>
    </div>
  );
}
