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
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Filter accounts by type
  const regularAccounts = accounts.filter((acc) => acc.type === "account");
  const assets = accounts.filter((acc) => acc.type === "asset");
  const debts = accounts.filter((acc) => acc.type === "debt");

  // Calculate total for budgetable accounts only
  const budgetableTotal = regularAccounts.reduce(
    (sum, acc) => sum + acc.balance,
    0
  );

  const renderAccountSection = (sectionAccounts: Account[], title: string) => {
    if (sectionAccounts.length === 0) return null;

    const sectionTotal = sectionAccounts.reduce(
      (sum, acc) => sum + acc.balance,
      0
    );
    const isDebt = title === "Debts";

    return (
      <div className="space-y-3">
        <h4 className="font-semibold text-slate-800 text-sm">{title}</h4>
        <div className="space-y-2">
          {sectionAccounts.map((account) => (
            <div
              key={account.name}
              className="flex items-center justify-between p-3 rounded-lg bg-slate-50"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div
                  className={`w-2.5 h-2.5 rounded-full ${account.color} flex-shrink-0`}
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
          className={`flex items-center justify-between p-3 rounded-lg border ${
            isDebt
              ? "bg-red-50 border-red-200"
              : "bg-slate-100 border-slate-200"
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
    <div className="h-full overflow-y-auto bg-white">
      <div className="space-y-6 p-6">
        {/* User Profile */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
          <Avatar className="h-12 w-12 shadow-sm">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="bg-slate-600 text-white font-semibold">
              J
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-slate-900">John&apos;s Budget</h2>
            <p className="text-sm text-slate-500">john.doe@university.edu</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <Button
            variant="default"
            className="w-full justify-start gap-3 h-11 bg-slate-900 hover:bg-slate-800"
          >
            <Target className="h-4 w-4" />
            Budget
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-11 hover:bg-slate-100"
          >
            <TrendingUp className="h-4 w-4" />
            Reports
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-11 hover:bg-slate-100"
          >
            <Wallet className="h-4 w-4" />
            Accounts
          </Button>
        </nav>

        {/* Accounts Sections */}
        <div className="space-y-6 pb-6">
          {renderAccountSection(regularAccounts, "Accounts")}
          {renderAccountSection(assets, "Assets")}
          {renderAccountSection(debts, "Debts")}
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 px-4 py-4 lg:px-6 sticky top-0 z-40">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="rounded-lg">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0 border-slate-200">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <MobileSidebar />
            </SheetContent>
          </Sheet>

          {/* Desktop User Info */}
          <div className="hidden lg:flex items-center gap-3">
            <Avatar className="h-10 w-10 shadow-sm">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback className="bg-slate-600 text-white font-semibold">
                J
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold text-slate-900">
                John&apos;s Budget
              </h1>
              <p className="text-sm text-slate-500">john.doe@university.edu</p>
            </div>
          </div>

          {/* Mobile User Avatar */}
          <div className="lg:hidden">
            <Avatar className="h-8 w-8 shadow-sm">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback className="bg-slate-600 text-white text-sm font-semibold">
                J
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Accounts Quick View */}
          <div className="lg:hidden">
            <Collapsible
              open={accountsExpanded}
              onOpenChange={setAccountsExpanded}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-white/80 border-slate-200 hover:bg-white rounded-lg"
                >
                  <Wallet className="h-4 w-4" />
                  {formatCurrency(budgetableTotal)}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      accountsExpanded ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="absolute right-4 top-16 z-50">
                <Card className="w-80 shadow-lg border-slate-200 bg-white">
                  <CardContent className="p-4 space-y-4">
                    {regularAccounts.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-800 text-sm">
                          Budgetable Accounts
                        </h4>
                        <div className="space-y-2">
                          {regularAccounts.map((account) => (
                            <div
                              key={account.name}
                              className="flex items-center justify-between p-2 rounded-lg bg-slate-50"
                            >
                              <div className="flex items-center gap-2 min-w-0 flex-1">
                                <div
                                  className={`w-2 h-2 rounded-full ${account.color} flex-shrink-0`}
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
                        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-100 border border-slate-200">
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
                        <Separator className="bg-slate-200" />
                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-800 text-sm">
                            Assets
                          </h4>
                          <div className="space-y-2">
                            {assets.map((account) => (
                              <div
                                key={account.name}
                                className="flex items-center justify-between p-2 rounded-lg bg-slate-50"
                              >
                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                  <div
                                    className={`w-2 h-2 rounded-full ${account.color} flex-shrink-0`}
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
                        <Separator className="bg-slate-200" />
                        <div className="space-y-3">
                          <h4 className="font-semibold text-slate-800 text-sm">
                            Debts
                          </h4>
                          <div className="space-y-2">
                            {debts.map((account) => (
                              <div
                                key={account.name}
                                className="flex items-center justify-between p-2 rounded-lg bg-slate-50"
                              >
                                <div className="flex items-center gap-2 min-w-0 flex-1">
                                  <div
                                    className={`w-2 h-2 rounded-full ${account.color} flex-shrink-0`}
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
            className="hidden lg:flex bg-white/80 border-slate-200 hover:bg-white rounded-lg"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden rounded-lg">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
