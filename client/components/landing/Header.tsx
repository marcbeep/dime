"use client";
import { Menu, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">
              <span className="mr-1">💰</span>Dime
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Features
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 flex items-center cursor-pointer">
                How it Works
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Blog
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Star className="h-4 w-4 mr-1" />
              40k+
            </div>
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-700">
              Features
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700">
              How it Works
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700">
              Pricing
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700">
              Blog
            </a>
            <div className="border-t border-gray-200 pt-2">
              <a href="#" className="block px-3 py-2 text-gray-700">
                Log In
              </a>
              <a href="#" className="block px-3 py-2 text-blue-600 font-medium">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
