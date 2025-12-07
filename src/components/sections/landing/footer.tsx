import Link from "next/link";

import { ThemeToggler, LogoWithName } from "~/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-border/80 w-full px-6 pt-8 pb-2 flex flex-col items-center justify-center gap-4">
      <div className="max-w-6xl mx-auto w-full flex flex-row items-center justify-between gap-6">
        <ThemeToggler />
        <div className="flex flex-col items-center md:items-start">
          <LogoWithName size="small" />
        </div>
      </div>
      <span className="text-xs opacity-80 mt-4">
        Made by <Link href="https://princeshah.me">Prince</Link> — with ❤️
      </span>
    </footer>
  );
}
