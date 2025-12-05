"use client";
/* eslint-disable */

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "~/utils";

interface ThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const ThemeToggler = ({
  className,
  duration = 1000,
  ...props
}: ThemeTogglerProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted
    ? theme === "system"
      ? systemTheme
      : theme
    : null;

  const isDark = currentTheme === "dark";

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  const handleToggle = useCallback(() => {
    if (
      typeof document === "undefined" ||
      !("startViewTransition" in document)
    ) {
      toggleTheme();
      return;
    }

    if (!buttonRef.current) return;

    const transition = (document as any).startViewTransition(() => {
      flushSync(toggleTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }, [toggleTheme, duration]);

  if (!mounted) {
    return (
      <button
        aria-hidden
        className={cn("opacity-0 pointer-events-none", className)}
        {...props}
      />
    );
  }

  return (
    <button
      suppressHydrationWarning
      ref={buttonRef}
      onClick={handleToggle}
      className={cn("opacity-70 hover:opacity-100", className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
