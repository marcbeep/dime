import { useState } from "react";
import {
  Calendar,
  Filter,
  Search,
  ArrowUpDown,
  Plus,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Transaction, Account, CategoryGroup } from "./types";
import { formatCurrency } from "../../lib/budget-utils";

interface TransactionsListProps {
  transactions: Transaction[];
  accounts: Account[];
  categoryGroups: CategoryGroup[];
}

export function TransactionsList({
  transactions,
  accounts,
  categoryGroups,
}: TransactionsListProps) {
  const [sortBy, setSortBy] = useState<"date" | "amount" | "payee">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [filterAccount, setFilterAccount] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Helper functions
  const getAccountName = (accountId: string) => {
    const account = accounts.find((acc) => acc.id === accountId);
    return account ? account.name : "Unknown Account";
  };

  const getAccountColor = (accountId: string) => {
    const account = accounts.find((acc) => acc.id === accountId);
    return account ? account.color : "bg-gray-500";
  };

  const getCategoryName = (categoryId: string | null) => {
    if (!categoryId) return "No Category";

    for (const group of categoryGroups) {
      const category = group.categories.find((cat) => cat.id === categoryId);
      if (category) return category.name;
    }
    return "Unknown Category";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Filter and sort transactions
  const filteredAndSortedTransactions = transactions
    .filter((transaction) => {
      const matchesAccount =
        filterAccount === "all" || transaction.accountId === filterAccount;
      const matchesSearch =
        searchTerm === "" ||
        transaction.payee.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.memo.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesAccount && matchesSearch;
    })
    .sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "date":
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case "amount":
          comparison = a.amount - b.amount;
          break;
        case "payee":
          comparison = a.payee.localeCompare(b.payee);
          break;
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

  const toggleSort = (field: "date" | "amount" | "payee") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-slate-900">All Transactions</h1>
        <Button className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium shadow-md hover:shadow-lg border-0 h-10 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02]">
          <Plus className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </div>

      {/* Filters */}
      <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all"
              />
            </div>

            {/* Account Filter */}
            <select
              value={filterAccount}
              onChange={(e) => setFilterAccount(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all bg-white"
            >
              <option value="all">All Accounts</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.name}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-0">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50/80 border-b border-slate-200/60">
                  <tr>
                    <th className="text-left p-4 font-semibold text-slate-700">
                      <button
                        onClick={() => toggleSort("date")}
                        className="flex items-center gap-2 hover:text-slate-900 transition-colors"
                      >
                        Date
                        <ArrowUpDown className="h-4 w-4" />
                      </button>
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-700">
                      Account
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-700">
                      <button
                        onClick={() => toggleSort("payee")}
                        className="flex items-center gap-2 hover:text-slate-900 transition-colors"
                      >
                        Payee
                        <ArrowUpDown className="h-4 w-4" />
                      </button>
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-700">
                      Category
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-700">
                      Memo
                    </th>
                    <th className="text-right p-4 font-semibold text-slate-700">
                      <button
                        onClick={() => toggleSort("amount")}
                        className="flex items-center gap-2 hover:text-slate-900 transition-colors ml-auto"
                      >
                        Amount
                        <ArrowUpDown className="h-4 w-4" />
                      </button>
                    </th>
                    <th className="text-center p-4 font-semibold text-slate-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedTransactions.map((transaction, index) => (
                    <tr
                      key={transaction.id}
                      className={`border-b border-slate-100/60 hover:bg-slate-50/50 transition-colors ${
                        index % 2 === 0 ? "bg-white/50" : "bg-slate-50/30"
                      }`}
                    >
                      <td className="p-4 text-slate-800 font-medium">
                        {formatDate(transaction.date)}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-3 h-3 rounded-full ${getAccountColor(
                              transaction.accountId
                            )} shadow-sm`}
                          />
                          <span className="text-slate-800 font-medium truncate">
                            {getAccountName(transaction.accountId)}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-slate-800 font-medium">
                        {transaction.payee}
                      </td>
                      <td className="p-4">
                        <Badge
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 border-0 rounded-lg font-medium"
                        >
                          {getCategoryName(transaction.category)}
                        </Badge>
                      </td>
                      <td className="p-4 text-slate-600 text-sm truncate max-w-xs">
                        {transaction.memo}
                      </td>
                      <td className="p-4 text-right">
                        <span
                          className={`font-bold ${
                            transaction.type === "inflow"
                              ? "text-emerald-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.type === "inflow" ? "+" : "-"}
                          {formatCurrency(transaction.amount)}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        {transaction.cleared ? (
                          <div className="inline-flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full">
                            <Check className="h-4 w-4 text-emerald-600" />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-6 h-6 bg-amber-100 rounded-full">
                            <X className="h-4 w-4 text-amber-600" />
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4 p-4">
            {filteredAndSortedTransactions.map((transaction) => (
              <Card
                key={transaction.id}
                className="border border-slate-200/60 rounded-2xl shadow-sm"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${getAccountColor(
                          transaction.accountId
                        )} shadow-sm`}
                      />
                      <span className="font-medium text-slate-800 text-sm">
                        {getAccountName(transaction.accountId)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">
                        {formatDate(transaction.date)}
                      </span>
                      {transaction.cleared ? (
                        <div className="inline-flex items-center justify-center w-5 h-5 bg-emerald-100 rounded-full">
                          <Check className="h-3 w-3 text-emerald-600" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-5 h-5 bg-amber-100 rounded-full">
                          <X className="h-3 w-3 text-amber-600" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-900">
                        {transaction.payee}
                      </span>
                      <span
                        className={`font-bold ${
                          transaction.type === "inflow"
                            ? "text-emerald-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.type === "inflow" ? "+" : "-"}
                        {formatCurrency(transaction.amount)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 border-0 rounded-lg font-medium text-xs"
                      >
                        {getCategoryName(transaction.category)}
                      </Badge>
                    </div>

                    {transaction.memo && (
                      <p className="text-sm text-slate-600 truncate">
                        {transaction.memo}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredAndSortedTransactions.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-slate-400" />
              </div>
              <p className="text-slate-600 mb-2">No transactions found</p>
              <p className="text-sm text-slate-400">
                {searchTerm || filterAccount !== "all"
                  ? "Try adjusting your filters"
                  : "Add your first transaction to get started"}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
