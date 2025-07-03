"use client";
import { Menu, X, Star, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-slate-900 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                <Coins className="h-6 w-6 text-white" />
              </div>
              Dime
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-300"
            >
              Features
            </a>
            <div className="relative group">
              <button className="text-slate-700 hover:text-slate-900 flex items-center cursor-pointer font-medium transition-colors duration-300">
                How it Works
                <svg
                  className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
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
            <a
              href="#"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-300"
            >
              Blog
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-sm text-slate-600 bg-gradient-to-r from-brand-yellow/20 to-brand-orange/20 px-3 py-2 rounded-2xl">
              <Star className="h-4 w-4 mr-2 fill-brand-yellow text-brand-yellow" />
              <span className="font-medium">40k+ users</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-2xl h-10 px-6 font-medium hover:bg-slate-100/70 transition-all duration-300"
            >
              Log In
            </Button>
            <Button
              size="sm"
              className="rounded-2xl h-10 px-6 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-2xl h-10 w-10 p-0"
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
        <div className="md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-sm overflow-hidden">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a
              href="#"
              className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 rounded-2xl font-medium transition-all duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 rounded-2xl font-medium transition-all duration-300"
            >
              How it Works
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 rounded-2xl font-medium transition-all duration-300"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 rounded-2xl font-medium transition-all duration-300"
            >
              Blog
            </a>
            <div className="border-t border-slate-200/60 pt-4 mt-4">
              <a
                href="#"
                className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 rounded-2xl font-medium transition-all duration-300"
              >
                Log In
              </a>
              <a
                href="#"
                className="block px-4 py-3 text-slate-900 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 rounded-2xl font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mt-2"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
