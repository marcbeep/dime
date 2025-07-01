import { Target, TrendingUp, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Navigation() {
  return (
    <Card>
      <CardContent className="p-4">
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
      </CardContent>
    </Card>
  );
}
