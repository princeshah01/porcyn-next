"use client";
/* eslint-disable */

import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { flushSync } from "react-dom";
import { Sun, Moon } from "lucide-react";
import { cn } from "~/shared/lib";

export const ThemeToggler = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = mounted
    ? theme === "system"
      ? systemTheme
      : theme
    : null;

  const applyWithTransition = useCallback(
    (newTheme: "light" | "dark" | "system") => {
      if (
        typeof document === "undefined" ||
        !("startViewTransition" in document)
      ) {
        setTheme(newTheme);
        return;
      }

      const transition = (document as any).startViewTransition(() => {
        flushSync(() => setTheme(newTheme));
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          { clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"] },
          {
            duration: 800,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });
    },
    [setTheme],
  );

  if (!mounted) {
    return <div className="h-10 w-45 opacity-0" />;
  }

  const btnBase =
    "flex items-center justify-center h-8 w-full transition-colors text-sm";

  const active = "bg-background/80";

  const inactive = "bg-muted";

  return (
    <div className="border-border/80 grid w-25 grid-cols-2 overflow-hidden rounded-sm border">
      <button
        aria-label="set light theme"
        type="button"
        onClick={() => applyWithTransition("light")}
        className={cn(btnBase, currentTheme === "light" ? active : inactive)}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        aria-label="set dark theme"
        type="button"
        onClick={() => applyWithTransition("dark")}
        className={cn(btnBase, currentTheme === "dark" ? active : inactive)}
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
};
