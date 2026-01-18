"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { SEARCH_PARAM_KEY } from "~/shared/constants";
import { cn, formUrlQuery, removeKeysFromQuery } from "~/shared/lib";

interface LocalSearchBarProps {
  route: string;
  placeholder: string;
  icon?: React.ReactNode;
  className?: string;
}

const LocalSearchBar = ({
  placeholder,
  icon,
  className,
  route,
}: LocalSearchBarProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const query = searchParams.get(SEARCH_PARAM_KEY.QUERY) || "";
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: SEARCH_PARAM_KEY.QUERY,
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: [SEARCH_PARAM_KEY.QUERY],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 400);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, route, pathname, router, query]);

  return (
    <label
      className={cn(
        "group bg-muted flex min-h-10 grow cursor-text items-center space-x-4 rounded-xl px-4",
        className,
      )}
    >
      {icon || <SearchIcon size={20} className="text-muted-foreground" />}
      <input
        type="text"
        className="mt-px w-full bg-transparent text-xs outline-none placeholder:text-xs"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </label>
  );
};

export { LocalSearchBar };
