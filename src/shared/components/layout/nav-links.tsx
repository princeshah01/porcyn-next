"use client";

import {
  BookmarkIcon,
  BriefcaseIcon,
  HomeIcon,
  PlusCircleIcon,
  TagsIcon,
  UsersIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { ROUTES } from "~/shared/constants";
import { cn } from "~/shared/lib";

import { ThemeToggler } from "../ui";

type NavLinksProps = {
  className?: string;
  onNavigate?: () => void;
};

const NAV_ITEMS = [
  { href: ROUTES.FEED, label: "Feed", icon: HomeIcon },
  { href: ROUTES.COMMUNITY, label: "Community", icon: UsersIcon },
  { href: ROUTES.TAGS, label: "Tags", icon: TagsIcon },
  { href: ROUTES.JOBS, label: "Jobs", icon: BriefcaseIcon },
  { href: ROUTES.COLLECTION, label: "Collections", icon: BookmarkIcon },
  { href: ROUTES.ASK, label: "Ask", icon: PlusCircleIcon },
] as const;

export function NavLinks({ className, onNavigate }: NavLinksProps) {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <motion.div
      className={cn("flex flex-col gap-2", className)}
      onMouseLeave={() => setHoveredHref(null)}
    >
      <AnimatePresence>
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href || pathname?.startsWith(item.href + "/");

          const Icon = item.icon;
          const isHovered = hoveredHref === item.href;

          return (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setHoveredHref(item.href)}
            >
              {isHovered && (
                <motion.div
                  layoutId="hovered-link"
                  className="bg-muted/50 absolute inset-0 rounded-md"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 40,
                  }}
                />
              )}

              <Link
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "relative z-10 flex items-center gap-2 rounded-md px-3 py-2 text-sm",
                  isActive
                    ? "bg-muted/50 text-accent-foreground"
                    : "text-muted-foreground hover:text-muted-foreground",
                )}
              >
                <Icon className="size-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            </div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}

export function SideBarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex h-full flex-col justify-between px-2">
      <NavLinks onNavigate={onNavigate} />
      <ThemeToggler />
    </nav>
  );
}
