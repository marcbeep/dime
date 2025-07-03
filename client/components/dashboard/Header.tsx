import {
  Settings,
  Menu,
  Wallet,
  ChevronDown,
  Target,
  TrendingUp,
  LogOut,
  User,
  Coins,
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Account } from "./types";

interface HeaderProps {
  accounts: Account[];
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({
  accounts,
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps) {
  // Filter accounts by type
  const regularAccounts = accounts.filter((acc) => acc.type === "account");
  const assets = accounts.filter((acc) => acc.type === "asset");
  const debts = accounts.filter((acc) => acc.type === "debt");

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
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200/50 px-4 py-3 lg:px-6 lg:py-4 sticky top-0 z-40 shadow-sm">
      <div className="flex items-center justify-between max-w-8xl mx-auto">
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg h-9 w-9"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0 border-slate-200/60">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <MobileSidebar />
            </SheetContent>
          </Sheet>

          {/* Logo - Always visible */}
          <div className="flex items-center">
            <div className="text-xl lg:text-2xl font-bold text-slate-900 flex items-center">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-brand-blue to-brand-purple rounded-xl lg:rounded-2xl flex items-center justify-center mr-2 lg:mr-3 shadow-md lg:shadow-lg">
                <Coins className="h-4 w-4 lg:h-6 lg:w-6 text-white" />
              </div>
              Dime
            </div>
          </div>
        </div>

        {/* Right Side - User Profile Dropdown */}
        <div className="flex items-center">
          {/* Desktop User Profile Dropdown */}
          <div className="hidden lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 h-10 px-3 rounded-lg hover:bg-slate-100/70 transition-all duration-200"
                >
                  <Avatar className="h-7 w-7 shadow-sm ring-1 ring-white">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="bg-gradient-to-r from-slate-600 to-slate-700 text-white text-xs font-semibold">
                      J
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-medium text-slate-900 text-sm">
                      John&apos;s Budget
                    </div>
                    <div className="text-xs text-slate-500">
                      john.doe@university.edu
                    </div>
                  </div>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel className="text-xs font-medium text-slate-600">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-sm">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-sm">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile User Profile Dropdown */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 h-10 px-2 rounded-lg hover:bg-slate-100/70 transition-all duration-200"
                >
                  <Avatar className="h-7 w-7 shadow-sm ring-1 ring-white">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="bg-gradient-to-r from-slate-600 to-slate-700 text-white text-xs font-semibold">
                      J
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-3 w-3 text-slate-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel className="text-xs font-medium text-slate-600">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-sm">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="text-sm">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-sm">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
