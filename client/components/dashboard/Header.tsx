import {
  Settings,
  Menu,
  Wallet,
  ChevronDown,
  Target,
  TrendingUp,
  LogOut,
  User,
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
import { Account, User as UserType } from "./types";
import {
  filterAccountsByType,
  formatCurrency,
  getUserDisplayName,
} from "@/lib/budget-utils";
import { getDiceBearAvatar } from "@/lib/utils";
import Image from "next/image";

interface HeaderProps {
  accounts: Account[];
  user: UserType;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeView: "budget" | "accounts" | "reports";
  onViewChange: (view: "budget" | "accounts" | "reports") => void;
}

export function Header({
  accounts,
  user,
  mobileMenuOpen,
  setMobileMenuOpen,
  activeView,
  onViewChange,
}: HeaderProps) {
  // Filter accounts by type using centralized utility
  const regularAccounts = filterAccountsByType(accounts, "account");
  const assets = filterAccountsByType(accounts, "asset");
  const debts = filterAccountsByType(accounts, "debt");

  // Generate avatar URLs
  const avatarUrl = getDiceBearAvatar(user.email, 80);
  const smallAvatarUrl = getDiceBearAvatar(user.email, 32);
  const displayName = getUserDisplayName(user);

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
              key={account.id}
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
            <AvatarImage src={avatarUrl} alt={`${displayName}'s avatar`} />
            <AvatarFallback className="bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold text-lg">
              {displayName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-slate-900 text-lg">
              {displayName}&apos;s Budget
            </h2>
            <p className="text-sm text-slate-500">{user.email}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-3">
          <Button
            variant={activeView === "budget" ? "default" : "ghost"}
            onClick={() => {
              onViewChange("budget");
              setMobileMenuOpen(false);
            }}
            className={`w-full justify-start gap-4 h-12 rounded-2xl font-medium transition-all duration-300 ${
              activeView === "budget"
                ? "bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white"
                : "hover:bg-slate-100/70 text-slate-700 hover:text-slate-900"
            }`}
          >
            <Target className="h-5 w-5" />
            Budget
          </Button>
          <Button
            variant={activeView === "reports" ? "default" : "ghost"}
            onClick={() => {
              onViewChange("reports");
              setMobileMenuOpen(false);
            }}
            className={`w-full justify-start gap-4 h-12 rounded-2xl font-medium transition-all duration-300 ${
              activeView === "reports"
                ? "bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white"
                : "hover:bg-slate-100/70 text-slate-700 hover:text-slate-900"
            }`}
          >
            <TrendingUp className="h-5 w-5" />
            Reports
          </Button>
          <Button
            variant={activeView === "accounts" ? "default" : "ghost"}
            onClick={() => {
              onViewChange("accounts");
              setMobileMenuOpen(false);
            }}
            className={`w-full justify-start gap-4 h-12 rounded-2xl font-medium transition-all duration-300 ${
              activeView === "accounts"
                ? "bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white"
                : "hover:bg-slate-100/70 text-slate-700 hover:text-slate-900"
            }`}
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
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl lg:rounded-2xl overflow-hidden mr-2 lg:mr-3 shadow-md lg:shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Dime Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              Dime
            </div>
          </div>
        </div>

        {/* Right Side - User Profile Dropdown */}
        <div className="flex items-center gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-2 lg:gap-3 h-9 lg:h-10 px-2 lg:px-3 rounded-xl hover:bg-slate-100/70 transition-all duration-200"
              >
                <Avatar className="h-6 w-6 lg:h-8 lg:w-8 shadow-sm">
                  <AvatarImage
                    src={smallAvatarUrl}
                    alt={`${displayName}'s avatar`}
                  />
                  <AvatarFallback className="bg-gradient-to-r from-slate-600 to-slate-700 text-white font-medium text-xs lg:text-sm">
                    {displayName.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline font-medium text-slate-700 text-sm lg:text-base">
                  {displayName}
                </span>
                <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4 text-slate-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 rounded-2xl shadow-lg border-slate-200/60 bg-white/95 backdrop-blur-sm"
            >
              <DropdownMenuLabel className="font-medium text-slate-900">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-slate-200/60" />
              <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100/70 transition-colors cursor-pointer">
                <User className="h-4 w-4 text-slate-600" />
                <span className="font-medium text-slate-700">Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100/70 transition-colors cursor-pointer">
                <Settings className="h-4 w-4 text-slate-600" />
                <span className="font-medium text-slate-700">Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-slate-200/60" />
              <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50/70 transition-colors cursor-pointer text-red-600">
                <LogOut className="h-4 w-4" />
                <span className="font-medium">Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
