import { useState } from "react";
import {
  Calendar,
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Transaction, Account, CategoryGroup } from "./types";
import { formatCurrency } from "@/lib/budget-utils";

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
  const [sortBy] = useState<"date" | "amount" | "payee">("date");
  const [sortOrder] = useState<"asc" | "desc">("desc");
  const [filterAccount, setFilterAccount] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

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
        transaction.payee.toLowerCase().includes(searchTerm.toLowerCase());
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

  // Pagination logic
  const totalPages = Math.ceil(
    filteredAndSortedTransactions.length / itemsPerPage
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTransactions = filteredAndSortedTransactions.slice(
    startIndex,
    endIndex
  );

  // Reset to first page when filters change
  const handleFilterChange = (newFilter: string) => {
    setFilterAccount(newFilter);
    setCurrentPage(1);
  };

  const handleSearchChange = (newSearch: string) => {
    setSearchTerm(newSearch);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-between mt-6 px-4">
        <p className="text-sm text-slate-600">
          Showing {startIndex + 1} to{" "}
          {Math.min(endIndex, filteredAndSortedTransactions.length)} of{" "}
          {filteredAndSortedTransactions.length} transactions
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {pageNumbers.map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(page)}
              className="h-8 w-8 p-0"
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    );
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
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all"
              />
            </div>

            {/* Account Filter */}
            <select
              value={filterAccount}
              onChange={(e) => handleFilterChange(e.target.value)}
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
                      Date
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-700">
                      Account
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-700">
                      Payee
                    </th>
                    <th className="text-left p-4 font-semibold text-slate-700">
                      Category
                    </th>
                    <th className="text-right p-4 font-semibold text-slate-700">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedTransactions.map((transaction, index) => (
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile List Rows (Middle Ground) */}
          <div className="md:hidden">
            <div className="divide-y divide-slate-100 bg-white rounded-2xl overflow-hidden shadow-sm">
              {paginatedTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex flex-col px-6 py-5 gap-3 bg-white hover:bg-slate-50 transition min-h-[80px]"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-3 h-3 rounded-full ${getAccountColor(
                          transaction.accountId
                        )} shadow-sm`}
                      />
                      <span className="text-sm text-slate-500 truncate max-w-[100px]">
                        {getAccountName(transaction.accountId)}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400">
                      {formatDate(transaction.date)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between w-full mt-1">
                    <span className="font-semibold text-slate-900 truncate text-base">
                      {transaction.payee}
                    </span>
                    <span
                      className={`font-bold text-lg ${
                        transaction.type === "inflow"
                          ? "text-emerald-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "inflow" ? "+" : "-"}
                      {formatCurrency(transaction.amount)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant="secondary"
                      className="bg-slate-100 text-slate-700 border-0 rounded-lg font-medium text-xs"
                    >
                      {getCategoryName(transaction.category)}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          {renderPagination()}

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
