"use client";

import {
  BookmarkIcon,
  BriefcaseIcon,
  CompassIcon,
  HomeIcon,
  PlusCircleIcon,
  TagsIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ROUTES } from "~/constants";
import { cn } from "~/lib";

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
  { href: ROUTES.ME, label: "Me", icon: CompassIcon },
] as const;

export function NavLinks({ className, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {NAV_ITEMS.map((item) => {
        const isActive =
          pathname === item.href || pathname?.startsWith(item.href + "/");
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              isActive
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground",
            )}
          >
            <Icon className="size-4 shrink-0" />
            <span className="truncate">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
