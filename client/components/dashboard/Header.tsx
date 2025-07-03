import {
  Settings,
  Menu,
  Wallet,
  ChevronDown,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Account } from "./types";

interface HeaderProps {
  accounts: Account[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  accountsExpanded: boolean;
  setAccountsExpanded: (expanded: boolean) => void;
}

export function Header({
  accounts,
  mobileMenuOpen,
  setMobileMenuOpen,
  accountsExpanded,
  setAccountsExpanded,
}: HeaderProps) {
  // Filter accounts by type
  const regularAccounts = accounts.filter((acc) => acc.type === "account");
  const assets = accounts.filter((acc) => acc.type === "asset");
  const debts = accounts.filter((acc) => acc.type === "debt");

  // Calculate totals
  const budgetableTotal = regularAccounts.reduce(
    (sum, acc) => sum + acc.balance,
    0
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const renderAccountSection = (sectionAccounts: Account[], title: string) => {
    const sectionTotal = sectionAccounts.reduce(
      (sum, acc) => sum + acc.balance,
      0
    );
    const isDebt =
      sectionAccounts.length > 0 && sectionAccounts[0].type === "debt";

    return (
      <div className="space-y-4">
        <h4 className="font-semibold text-slate-800 text-sm">{title}</h4>
        <div className="space-y-3">
          {sectionAccounts.map((account) => (
            <div
              key={account.name}
              className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-slate-50/70 to-slate-100/50 hover:from-slate-100/80 hover:to-slate-200/60 transition-all duration-300"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div
                  className={`w-3 h-3 rounded-full ${account.color} flex-shrink-0 shadow-sm ring-2 ring-white`}
                />
                <span
                  className="font-medium text-slate-800 truncate text-sm"
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
        </div>
        <div
          className={`flex items-center justify-between p-3 rounded-xl border-2 transition-all duration-300 ${
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
            {title} Total
          </span>
          <span
            className={`font-bold text-sm ${
              isDebt ? "text-red-900" : "text-slate-900"
            }`}
          >
            {formatCurrency(Math.abs(sectionTotal))}
          </span>
        </div>
      </div>
    );
  };

  const MobileSidebar = () => (
    <div className="h-full overflow-y-auto bg-gradient-to-br from-white to-slate-50/80">
      <div className="space-y-8 p-6">
        {/* User Profile */}
        <div className="flex items-center gap-4 pb-6 border-b border-slate-200/60">
          <Avatar className="h-14 w-14 shadow-lg ring-2 ring-white">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold text-lg">
              J
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-slate-900 text-lg">
              John&apos;s Budget
            </h2>
            <p className="text-sm text-slate-500">john.doe@university.edu</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          <Button
            variant="default"
            className="w-full justify-start gap-4 h-12 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 rounded-2xl font-medium"
          >
            <Target className="h-5 w-5" />
            Budget
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-4 h-12 hover:bg-slate-100/70 rounded-2xl font-medium"
          >
            <TrendingUp className="h-5 w-5" />
            Reports
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-4 h-12 hover:bg-slate-100/70 rounded-2xl font-medium"
          >
            <Wallet className="h-5 w-5" />
            Accounts
          </Button>
        </nav>

        {/* Accounts Sections */}
        <div className="space-y-8 pb-6">
          {renderAccountSection(regularAccounts, "Accounts")}
          {renderAccountSection(assets, "Assets")}
          {renderAccountSection(debts, "Debts")}
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/60 px-4 py-6 lg:px-8 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center justify-between max-w-8xl mx-auto">
        <div className="flex items-center gap-6">
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl h-10 w-10"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0 border-slate-200/60">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <MobileSidebar />
            </SheetContent>
          </Sheet>

          {/* Desktop User Info */}
          <div className="hidden lg:flex items-center gap-4">
            <Avatar className="h-12 w-12 shadow-lg ring-2 ring-white">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback className="bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold">
                J
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold text-slate-900 text-lg">
                John&apos;s Budget
              </h1>
              <p className="text-sm text-slate-500">john.doe@university.edu</p>
            </div>
          </div>

          {/* Mobile User Avatar */}
          <div className="lg:hidden">
            <Avatar className="h-10 w-10 shadow-md ring-2 ring-white">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback className="bg-gradient-to-r from-slate-600 to-slate-700 text-white text-sm font-semibold">
                J
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <Collapsible
              open={accountsExpanded}
              onOpenChange={setAccountsExpanded}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 h-10 px-4 rounded-2xl hover:bg-slate-100/70 transition-all duration-300"
                >
                  <Wallet className="h-4 w-4" />
                  <span className="font-medium text-slate-700">
                    {formatCurrency(budgetableTotal)}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>

              <CollapsibleContent className="absolute right-4 top-20 z-50">
                <Card className="w-80 shadow-2xl border-0 bg-gradient-to-br from-white to-slate-50/90 backdrop-blur-md rounded-3xl">
                  <CardContent className="p-6 space-y-6">
                    {regularAccounts.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-800 text-base">
                          Budgetable Accounts
                        </h4>
                        <div className="space-y-3">
                          {regularAccounts.map((account) => (
                            <div
                              key={account.name}
                              className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-slate-50/70 to-slate-100/50 hover:from-slate-100/80 hover:to-slate-200/60 transition-all duration-300"
                            >
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <div
                                  className={`w-3 h-3 rounded-full ${account.color} flex-shrink-0 shadow-sm ring-2 ring-white`}
                                />
                                <span
                                  className="text-sm font-medium truncate"
                                  title={account.name}
                                >
                                  {account.name}
                                </span>
                              </div>
                              <span className="text-sm font-semibold flex-shrink-0 ml-2">
                                {formatCurrency(account.balance)}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-slate-100/80 to-slate-200/60 border-2 border-slate-300/70">
                          <span className="text-sm font-semibold text-slate-800">
                            Total
                          </span>
                          <span className="text-sm font-bold text-slate-900">
                            {formatCurrency(budgetableTotal)}
                          </span>
                        </div>
                      </div>
                    )}
                    {assets.length > 0 && (
                      <>
                        <Separator className="bg-slate-300/60" />
                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-800 text-base">
                            Assets
                          </h4>
                          <div className="space-y-3">
                            {assets.map((account) => (
                              <div
                                key={account.name}
                                className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-slate-50/70 to-slate-100/50 hover:from-slate-100/80 hover:to-slate-200/60 transition-all duration-300"
                              >
                                <div className="flex items-center gap-3 min-w-0 flex-1">
                                  <div
                                    className={`w-3 h-3 rounded-full ${account.color} flex-shrink-0 shadow-sm ring-2 ring-white`}
                                  />
                                  <span
                                    className="text-sm font-medium truncate"
                                    title={account.name}
                                  >
                                    {account.name}
                                  </span>
                                </div>
                                <span className="text-sm font-semibold flex-shrink-0 ml-2">
                                  {formatCurrency(account.balance)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    {debts.length > 0 && (
                      <>
                        <Separator className="bg-slate-300/60" />
                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-800 text-base">
                            Debts
                          </h4>
                          <div className="space-y-3">
                            {debts.map((account) => (
                              <div
                                key={account.name}
                                className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-slate-50/70 to-slate-100/50 hover:from-slate-100/80 hover:to-slate-200/60 transition-all duration-300"
                              >
                                <div className="flex items-center gap-3 min-w-0 flex-1">
                                  <div
                                    className={`w-3 h-3 rounded-full ${account.color} flex-shrink-0 shadow-sm ring-2 ring-white`}
                                  />
                                  <span
                                    className="text-sm font-medium truncate"
                                    title={account.name}
                                  >
                                    {account.name}
                                  </span>
                                </div>
                                <span className="text-sm font-semibold flex-shrink-0 ml-2">
                                  {formatCurrency(Math.abs(account.balance))}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="hidden lg:flex bg-white/80 border-slate-200/60 hover:bg-white rounded-2xl h-10 font-medium shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-xl h-10 w-10"
          >
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
