import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Account } from "./types";
import { formatCurrency } from "../../lib/budget-utils";

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
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  // Determine styling based on account type
  const isDebt = accounts.length > 0 && accounts[0].type === "debt";

  return (
    <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm overflow-hidden">
      <CardHeader className="pb-6">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center justify-between">
          {title}
          {showAddButton && (
            <Button
              size="sm"
              variant="ghost"
              className="h-9 w-9 p-0 rounded-xl hover:bg-slate-100/70 hover:shadow-md transition-all duration-300 transform hover:scale-110"
            >
              <Plus className="h-4 w-4 text-slate-600" />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-slate-50/80 to-slate-100/60 hover:from-slate-100/90 hover:to-slate-200/70 transition-all duration-300 group hover:shadow-md transform hover:scale-[1.02] border border-slate-200/50"
          >
            <div className="flex items-center gap-4 min-w-0 flex-1">
              <div
                className={`w-3 h-3 rounded-full ${account.color} flex-shrink-0 shadow-sm ring-2 ring-white`}
              />
              <span
                className="font-medium text-slate-800 truncate text-sm group-hover:text-slate-900 transition-colors"
                title={account.name}
              >
                {account.name}
              </span>
            </div>
            <span className="font-semibold text-slate-700 flex-shrink-0 ml-3 text-sm">
              {formatCurrency(Math.abs(account.balance))}
            </span>
          </div>
        ))}
        {accounts.length > 0 && (
          <>
            <Separator className="my-6 bg-slate-300/60" />
            <div
              className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-300 ${
                isDebt
                  ? "bg-gradient-to-r from-red-50/80 to-red-100/60 border-red-200/70"
                  : "bg-gradient-to-r from-slate-100/80 to-slate-200/60 border-slate-300/70"
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
