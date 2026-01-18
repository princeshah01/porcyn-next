import { FeedFilters } from "~/features/feed/components/filters";
import { LocalSearchBar } from "~/shared/components/search/localsearch-bar";
import { Button } from "~/shared/components/ui";
import { ROUTES } from "~/shared/constants";
import type { SearchParams } from "~/shared/types";

export default async function FeedPage({ searchParams }: SearchParams) {
  const { query, filter } = await searchParams;
  console.log({ query, filter });
  return (
    <div className="size-full space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">All Questions</h1>
        <Button size="sm" className="mt-2 text-xs">
          Ask a Question
        </Button>
      </div>
      <div>
        <LocalSearchBar route={ROUTES.FEED} placeholder="Search questions..." />
        <FeedFilters />
      </div>
    </div>
  );
}
