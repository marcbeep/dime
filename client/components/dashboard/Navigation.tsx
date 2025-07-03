import { Target, TrendingUp, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Navigation() {
  return (
    <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm">
      <CardContent className="p-6">
        <nav className="space-y-3">
          <Button
            variant="default"
            className="w-full justify-start gap-4 h-14 text-left rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] font-medium"
          >
            <Target className="h-5 w-5" />
            Budget
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-4 h-14 text-left rounded-2xl hover:bg-slate-100/70 text-slate-700 hover:text-slate-900 transition-all duration-300 transform hover:scale-[1.02] font-medium"
          >
            <TrendingUp className="h-5 w-5" />
            Reports
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-4 h-14 text-left rounded-2xl hover:bg-slate-100/70 text-slate-700 hover:text-slate-900 transition-all duration-300 transform hover:scale-[1.02] font-medium"
          >
            <Wallet className="h-5 w-5" />
            Accounts
          </Button>
        </nav>
      </CardContent>
    </Card>
  );
}
