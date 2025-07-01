"use client";

import { useState } from "react";
import { Header, Sidebar, MainContent } from "@/components/dashboard";
import { Account, CategoryGroup } from "@/components/dashboard/types";

export default function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState("July 2025");
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "savings",
    "obligations",
  ]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [accountsExpanded, setAccountsExpanded] = useState(false);

  const accounts: Account[] = [
    { name: "Checking", balance: 1200.0, color: "bg-blue-500" },
    { name: "Savings", balance: 600.0, color: "bg-green-500" },
    { name: "Venmo", balance: 100.0, color: "bg-purple-500" },
    { name: "Cash", balance: 100.0, color: "bg-yellow-500" },
  ];

  const categoryGroups: CategoryGroup[] = [
    {
      id: "savings",
      name: "Savings",
      categories: [
        {
          name: "Emergency Fund",
          assigned: 100,
          activity: 0,
          available: 100,
          status: "good",
        },
        {
          name: "Spring Break Fund",
          assigned: 50,
          activity: 0,
          available: 50,
          status: "good",
        },
        {
          name: "Graduation Trip",
          assigned: 50,
          activity: 0,
          available: 50,
          status: "good",
        },
      ],
    },
    {
      id: "obligations",
      name: "Monthly Bills",
      categories: [
        {
          name: "Rent",
          assigned: 700,
          activity: 700,
          available: 0,
          status: "good",
        },
        {
          name: "Utilities",
          assigned: 60,
          activity: 60,
          available: 0,
          status: "good",
        },
        {
          name: "Internet",
          assigned: 30,
          activity: 30,
          available: 0,
          status: "good",
        },
        {
          name: "Phone",
          assigned: 20,
          activity: 20,
          available: 0,
          status: "good",
        },
      ],
    },
    {
      id: "subscriptions",
      name: "Subscriptions",
      categories: [
        {
          name: "Spotify",
          assigned: 10,
          activity: 10,
          available: 0,
          status: "good",
        },
        {
          name: "Netflix",
          assigned: 10,
          activity: 10,
          available: 0,
          status: "good",
        },
        {
          name: "Amazon Prime",
          assigned: 5,
          activity: 5,
          available: 0,
          status: "good",
        },
        {
          name: "Gym",
          assigned: 20,
          activity: 20,
          available: 0,
          status: "good",
        },
      ],
    },
    {
      id: "education",
      name: "Education",
      categories: [
        {
          name: "Textbooks",
          assigned: 50,
          activity: 0,
          available: 50,
          status: "good",
        },
        {
          name: "Supplies",
          assigned: 20,
          activity: 0,
          available: 20,
          status: "good",
        },
        {
          name: "Printing",
          assigned: 10,
          activity: 0,
          available: 10,
          status: "good",
        },
      ],
    },
    {
      id: "lifestyle",
      name: "Lifestyle",
      categories: [
        {
          name: "Groceries",
          assigned: 200,
          activity: 120,
          available: 80,
          status: "good",
        },
        {
          name: "Dining Out",
          assigned: 100,
          activity: 60,
          available: 40,
          status: "good",
        },
        {
          name: "Coffee",
          assigned: 30,
          activity: 20,
          available: 10,
          status: "good",
        },
        {
          name: "Entertainment",
          assigned: 40,
          activity: 20,
          available: 20,
          status: "good",
        },
        {
          name: "Shopping",
          assigned: 40,
          activity: 20,
          available: 20,
          status: "good",
        },
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handlePreviousMonth = () => {
    // TODO: Implement month navigation logic
    console.log("Previous month");
  };

  const handleNextMonth = () => {
    // TODO: Implement month navigation logic
    console.log("Next month");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header
        accounts={accounts}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        accountsExpanded={accountsExpanded}
        setAccountsExpanded={setAccountsExpanded}
      />

      <div className="max-w-7xl mx-auto px-4 py-6 lg:px-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <Sidebar accounts={accounts} />
          <MainContent
            selectedMonth={selectedMonth}
            readyToAssign={1550.0}
            categoryGroups={categoryGroups}
            expandedCategories={expandedCategories}
            onPreviousMonth={handlePreviousMonth}
            onNextMonth={handleNextMonth}
            onToggleCategory={toggleCategory}
          />
        </div>
      </div>
    </div>
  );
}
