import Link from "next/link";

import { LandingComponents } from "~/components/sections";
import { LogoWithName, ThemeToggler } from "~/components/ui";

export default function Home() {
  return (
    <div className="w-full">
      <LandingComponents.Hero />
      <footer className="border-t border-border/80 w-full px-6 pt-8 pb-2 flex flex-col items-center justify-center gap-4">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <ThemeToggler />
          <div className="flex flex-col items-center md:items-start">
            <LogoWithName size="small" />
          </div>
        </div>
        <p>
          <span className="text-xs opacity-80 mt-1">
            Made by <Link href="https://princeshah.me">Prince</Link> — with ❤️
          </span>
        </p>
      </footer>
    </div>
  );
}
