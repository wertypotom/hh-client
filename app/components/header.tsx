import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/shared/ui";
import { HHLoginButton } from "./hh-login-button.tsx";

type NavigationTitles = "Features" | "How It Works" | "Testimonials";

type HeaderLink = {
  title: NavigationTitles;
  href: string;
};

const headerLinks: HeaderLink[] = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "How It Works",
    href: "#how-it-works",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-[#D6001C]" />
          <span className="text-xl font-bold">AI Resume Polisher</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <HHLoginButton>Connect hh.ru</HHLoginButton>
      </div>
    </header>
  );
}
