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

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  const MobileSidebar = () => (
    <div className="space-y-6 p-6">
      {/* User Profile */}
      <div className="flex items-center gap-3 pb-4 border-b">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback className="bg-blue-600 text-white">J</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold text-slate-900">John&apos;s Budget</h2>
          <p className="text-sm text-slate-500">john.doe@university.edu</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <Button variant="default" className="w-full justify-start gap-3 h-12">
          <Target className="h-5 w-5" />
          Budget
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 h-12">
          <TrendingUp className="h-5 w-5" />
          Reports
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-3 h-12">
          <Wallet className="h-5 w-5" />
          Accounts
        </Button>
      </nav>

      {/* Accounts */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-3">Accounts</h3>
        <div className="space-y-3">
          {accounts.map((account) => (
            <div
              key={account.name}
              className="flex items-center justify-between p-3 rounded-2xl bg-slate-50"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${account.color}`} />
                <span className="font-medium text-slate-900">
                  {account.name}
                </span>
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
        </div>
      </div>
    </div>
  );

  return (
    <header className="bg-white border-b border-slate-200 px-4 py-3 lg:px-6 lg:py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <MobileSidebar />
            </SheetContent>
          </Sheet>

          {/* Desktop User Info */}
          <div className="hidden lg:flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback className="bg-blue-600 text-white">
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
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback className="bg-blue-600 text-white text-sm">
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
                  className="gap-2 bg-transparent"
                >
                  <Wallet className="h-4 w-4" />
                  {formatCurrency(totalBalance)}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      accountsExpanded ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="absolute right-4 top-16 z-50">
                <Card className="w-64 rounded-2xl shadow-lg">
                  <CardContent className="p-4 space-y-2">
                    {accounts.map((account) => (
                      <div
                        key={account.name}
                        className="flex items-center justify-between p-2 rounded-xl bg-slate-50"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${account.color}`}
                          />
                          <span className="text-sm font-medium">
                            {account.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold">
                          {formatCurrency(account.balance)}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="hidden lg:flex bg-transparent"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
