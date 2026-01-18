"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { SEARCH_PARAM_KEY } from "~/constants";
import { formUrlQuery, removeKeysFromQuery } from "~/lib";

import { Button } from "../ui";

const FEED_FILTERS = [
  { label: "Newest", value: "newest" },
  { label: "Popular", value: "popular" },
  { label: "Unanswered", value: "unanswered" },
  { label: "Recommended", value: "recommended" },
];

const FeedFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeFilter = searchParams.get(SEARCH_PARAM_KEY.FILTER) || "";

  const handleFilterSelect = (value: string) => {
    let url = "";

    if (activeFilter === value) {
      url = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: [SEARCH_PARAM_KEY.FILTER],
      });
    } else {
      url = formUrlQuery({
        params: searchParams.toString(),
        key: SEARCH_PARAM_KEY.FILTER,
        value,
      });
    }

    router.push(url, { scroll: false });
  };

  return (
    <div className="no-scrollbar flex gap-4 overflow-x-scroll py-4">
      {FEED_FILTERS.map((filter) => (
        <Button
          key={filter.value}
          size="sm"
          className="rounded-xl text-xs"
          variant={activeFilter === filter.value ? "default" : "secondary"}
          onClick={() => handleFilterSelect(filter.value)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

export { FeedFilters };
