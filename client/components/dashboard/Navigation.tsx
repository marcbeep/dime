import { Target, TrendingUp, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface NavigationProps {
  activeView: "budget" | "accounts" | "reports";
  onViewChange: (view: "budget" | "accounts" | "reports") => void;
}

export function Navigation({ activeView, onViewChange }: NavigationProps) {
  return (
    <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <nav className="space-y-3">
          <Button
            variant={activeView === "budget" ? "default" : "ghost"}
            onClick={() => onViewChange("budget")}
            className={`w-full justify-start gap-4 h-14 text-left rounded-2xl transition-all duration-300 transform hover:scale-[1.02] font-medium ${
              activeView === "budget"
                ? "bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white shadow-lg hover:shadow-xl"
                : "hover:bg-slate-100/70 text-slate-700 hover:text-slate-900"
            }`}
          >
            <Target className="h-5 w-5" />
            Budget
          </Button>
          <Button
            variant={activeView === "reports" ? "default" : "ghost"}
            onClick={() => onViewChange("reports")}
            className={`w-full justify-start gap-4 h-14 text-left rounded-2xl transition-all duration-300 transform hover:scale-[1.02] font-medium ${
              activeView === "reports"
                ? "bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white shadow-lg hover:shadow-xl"
                : "hover:bg-slate-100/70 text-slate-700 hover:text-slate-900"
            }`}
          >
            <TrendingUp className="h-5 w-5" />
            Reports
          </Button>
          <Button
            variant={activeView === "accounts" ? "default" : "ghost"}
            onClick={() => onViewChange("accounts")}
            className={`w-full justify-start gap-4 h-14 text-left rounded-2xl transition-all duration-300 transform hover:scale-[1.02] font-medium ${
              activeView === "accounts"
                ? "bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white shadow-lg hover:shadow-xl"
                : "hover:bg-slate-100/70 text-slate-700 hover:text-slate-900"
            }`}
          >
            <Wallet className="h-5 w-5" />
            Accounts
          </Button>
        </nav>
      </CardContent>
    </Card>
  );
}
