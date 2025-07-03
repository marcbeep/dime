"use client";
import { Header, HeroSection } from "@/components/landing";
import { Footer } from "@/components/ui/footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/30 overflow-hidden flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
      </main>

      <Footer />
    </div>
  );
}
