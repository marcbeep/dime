"use client";
import { Header, HeroSection } from "@/components/landing";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
      </main>
    </div>
  );
}
