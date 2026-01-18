import Link from "next/link";

import { ThemeToggler, LogoWithName } from "~/shared/components/ui";

export function Footer() {
  return (
    <footer className="border-border/80 flex w-full flex-col items-center justify-center gap-4 border-t px-6 pt-8 pb-2">
      <div className="mx-auto flex w-full max-w-6xl flex-row items-center justify-between gap-6">
        <ThemeToggler />
        <div className="flex flex-col items-center md:items-start">
          <LogoWithName size="small" />
        </div>
      </div>
      <span className="mt-4 text-xs opacity-80">
        Made by <Link href="https://princeshah.me">Prince</Link> — with ❤️
      </span>
    </footer>
  );
}
