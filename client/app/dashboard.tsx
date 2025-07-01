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

  const accounts: Account[] = [
    { name: "Chase Bank", balance: 2450.75, color: "bg-blue-500" },
    { name: "Savings Account", balance: 1200.0, color: "bg-green-500" },
    { name: "Venmo", balance: 85.5, color: "bg-purple-500" },
    { name: "Cash", balance: 45.25, color: "bg-yellow-500" },
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
          available: 100.0,
          status: "good",
        },
        {
          name: "Spring Break Fund",
          assigned: 50,
          activity: 0,
          available: 50.0,
          status: "good",
        },
        {
          name: "Graduation Trip",
          assigned: 25,
          activity: 0,
          available: 25.0,
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
          assigned: 800,
          activity: 800,
          available: 0.0,
          status: "good",
        },
        {
          name: "Utilities",
          assigned: 75,
          activity: 75,
          available: 0.0,
          status: "good",
        },
        {
          name: "Internet",
          assigned: 45,
          activity: 45,
          available: 0.0,
          status: "good",
        },
        {
          name: "Phone Bill",
          assigned: 35,
          activity: 35,
          available: 0.0,
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
          available: 0.0,
          status: "good",
        },
        {
          name: "Netflix",
          assigned: 15,
          activity: 15,
          available: 0.0,
          status: "good",
        },
        {
          name: "Amazon Prime",
          assigned: 12,
          activity: 12,
          available: 0.0,
          status: "good",
        },
        {
          name: "Gym Membership",
          assigned: 25,
          activity: 25,
          available: 0.0,
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
          assigned: 200,
          activity: 150,
          available: 50.0,
          status: "good",
        },
        {
          name: "School Supplies",
          assigned: 50,
          activity: 30,
          available: 20.0,
          status: "good",
        },
        {
          name: "Printing",
          assigned: 20,
          activity: 15,
          available: 5.0,
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
          assigned: 300,
          activity: 180,
          available: 120.0,
          status: "good",
        },
        {
          name: "Dining Out",
          assigned: 150,
          activity: 95,
          available: 55.0,
          status: "good",
        },
        {
          name: "Coffee",
          assigned: 60,
          activity: 45,
          available: 15.0,
          status: "good",
        },
        {
          name: "Entertainment",
          assigned: 100,
          activity: 60,
          available: 40.0,
          status: "good",
        },
        {
          name: "Shopping",
          assigned: 150,
          activity: 80,
          available: 70.0,
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
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <Sidebar accounts={accounts} />
          <MainContent
            selectedMonth={selectedMonth}
            readyToAssign={125.0}
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
