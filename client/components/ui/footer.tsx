import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center text-slate-600 text-sm">
          <span>Made with</span>
          <Heart className="h-4 w-4 mx-1 fill-red-500 text-red-500" />
          <span>by</span>
          <a
            href="https://marc.tt"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 text-slate-900 hover:text-slate-700 underline transition-colors"
          >
            Marc Beepath
          </a>
          <span>in Liverpool, June 2025</span>
        </div>
      </div>
    </footer>
  );
}
