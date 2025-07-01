import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Account } from "./types";

interface AccountsListProps {
  accounts: Account[];
  title: string;
  showAddButton?: boolean;
}

export function AccountsList({
  accounts,
  title,
  showAddButton = true,
}: AccountsListProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  // Determine styling based on account type
  const isDebt = accounts.length > 0 && accounts[0].type === "debt";

  return (
    <Card className="border border-slate-200/60 shadow-sm bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold text-slate-900 flex items-center justify-between">
          {title}
          {showAddButton && (
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Plus className="h-4 w-4 text-slate-600" />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        {accounts.map((account) => (
          <div
            key={account.name}
            className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50 hover:bg-slate-100/70 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div
                className={`w-2.5 h-2.5 rounded-full ${account.color} flex-shrink-0 shadow-sm`}
              />
              <span
                className="font-medium text-slate-800 truncate text-sm group-hover:text-slate-900 transition-colors"
                title={account.name}
              >
                {account.name}
              </span>
            </div>
            <span className="font-semibold text-slate-700 flex-shrink-0 ml-2 text-sm">
              {formatCurrency(Math.abs(account.balance))}
            </span>
          </div>
        ))}
        {accounts.length > 0 && (
          <>
            <Separator className="my-4 bg-slate-200/60" />
            <div
              className={`flex items-center justify-between p-3 rounded-lg ${
                isDebt
                  ? "bg-red-50/70 border border-red-100"
                  : "bg-slate-100/70 border border-slate-200"
              }`}
            >
              <span
                className={`font-semibold text-sm ${
                  isDebt ? "text-red-800" : "text-slate-800"
                }`}
              >
                Total
              </span>
              <span
                className={`font-bold text-sm ${
                  isDebt ? "text-red-900" : "text-slate-900"
                }`}
              >
                {formatCurrency(Math.abs(totalBalance))}
              </span>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
