"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, BarChart3 } from "lucide-react";
import {
  Header,
  Sidebar,
  MainContent,
  TransactionsList,
  NetWorthChart,
} from "@/components/dashboard";
import { Footer } from "@/components/ui/footer";
import { BudgetData, BudgetCalculations } from "@/components/dashboard/types";
import {
  calculateBudgetMetrics,
  getDefaultExpandedCategories,
  fetchBudgetData,
} from "@/lib/budget-utils";

export default function Dashboard() {
  const [budgetData, setBudgetData] = useState<BudgetData | null>(null);
  const [calculations, setCalculations] = useState<BudgetCalculations | null>(
    null
  );
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState<
    "budget" | "accounts" | "reports"
  >("budget");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBudgetData() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchBudgetData();
        const metrics = calculateBudgetMetrics(
          data.accounts,
          data.categoryGroups
        );
        const defaultExpanded = getDefaultExpandedCategories(
          data.categoryGroups
        );

        setBudgetData(data);
        setCalculations(metrics);
        setExpandedCategories(defaultExpanded);
      } catch (err) {
        console.error("Failed to load budget data:", err);
        setError("Failed to load budget data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    loadBudgetData();
  }, []);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleViewChange = (view: "budget" | "accounts" | "reports") => {
    setActiveView(view);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-slate-300 border-t-slate-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your budget...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !budgetData || !calculations) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <p className="text-slate-600 mb-4">
            {error || "Something went wrong loading your budget."}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Render different content based on activeView
  const renderContent = () => {
    switch (activeView) {
      case "accounts":
        return (
          <TransactionsList
            transactions={budgetData.transactions}
            accounts={budgetData.accounts}
            categoryGroups={budgetData.categoryGroups}
          />
        );
      case "reports":
        return (
          <div className="space-y-6">
            <NetWorthChart />
          </div>
        );
      default:
        return (
          <MainContent
            readyToAssign={calculations.readyToAssign}
            categoryGroups={budgetData.categoryGroups}
            expandedCategories={expandedCategories}
            onToggleCategory={toggleCategory}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/20 flex flex-col">
      <Header
        accounts={budgetData.accounts}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        activeView={activeView}
        onViewChange={handleViewChange}
      />

      <div className="flex-1 max-w-8xl mx-auto px-4 py-4 lg:px-6 lg:py-6 mb-8 min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 min-w-[320px]">
          {/* Sidebar - Always visible on desktop */}
          <div className="lg:col-span-1">
            <Sidebar
              accounts={budgetData.accounts}
              activeView={activeView}
              onViewChange={handleViewChange}
            />
          </div>

          {/* Main content area */}
          <div className="lg:col-span-3 min-w-0">{renderContent()}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
