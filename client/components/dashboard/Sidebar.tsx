import { Navigation } from "./Navigation";
import { AccountsList } from "./AccountsList";
import { Account } from "./types";

interface SidebarProps {
  accounts: Account[];
}

export function Sidebar({ accounts }: SidebarProps) {
  return (
    <div className="lg:col-span-1">
      <div className="space-y-6">
        <Navigation />
        <AccountsList accounts={accounts} />
      </div>
    </div>
  );
}
