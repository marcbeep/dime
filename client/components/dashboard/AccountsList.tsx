import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Account } from "./types";

interface AccountsListProps {
  accounts: Account[];
}

export function AccountsList({ accounts }: AccountsListProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <Card className="rounded-2xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center justify-between">
          Accounts
          <Button size="sm" variant="outline">
            <Plus className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {accounts.map((account) => (
          <div
            key={account.name}
            className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${account.color}`} />
              <span className="font-medium text-slate-900">{account.name}</span>
            </div>
            <span className="font-semibold text-slate-700">
              {formatCurrency(account.balance)}
            </span>
          </div>
        ))}
        <Separator className="my-3" />
        <div className="flex items-center justify-between p-3 rounded-2xl bg-blue-50">
          <span className="font-semibold text-blue-900">Total</span>
          <span className="font-bold text-blue-900">
            {formatCurrency(totalBalance)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
