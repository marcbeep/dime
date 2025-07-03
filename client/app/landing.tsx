"use client";
import { Header, HeroSection } from "@/components/landing";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/30">
      <Header />

      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <HeroSection />
      </main>
    </div>
  );
}
