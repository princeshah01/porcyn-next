import Link from "next/link";

import { FeedFilters, FeedData } from "~/features/feed";
import { LocalSearchBar } from "~/shared/components/search";
import { Button } from "~/shared/components/ui";
import { ROUTES } from "~/shared/constants";
import type { SearchParams } from "~/shared/types";

export default async function FeedPage({ searchParams }: SearchParams) {
  const searchQuery = await searchParams;

  return (
    <div className="size-full space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">All Questions</h1>
        <Link href={ROUTES.ASK}>
          <Button size="sm" className="mt-2 text-xs">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div>
        <LocalSearchBar route={ROUTES.FEED} placeholder="Search questions..." />
        <FeedFilters />
      </div>
      <FeedData {...searchQuery} />
    </div>
  );
}
