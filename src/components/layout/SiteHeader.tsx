import Link from "next/link";

export function SiteHeader() {
    return (
      <header className="w-full px-6 py-4 border-b border-border flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          🧠 AI Learn
        </Link>
        <nav className="flex gap-6 text-sm">
          <a href="/learn" className="hover:underline">Learn</a>
          <a href="/quiz" className="hover:underline">Quiz</a>
          <a href="/profile" className="hover:underline">Profile</a>
        </nav>
      </header>
    );
  }
  