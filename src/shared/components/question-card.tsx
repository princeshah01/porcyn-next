import { Eye, MessageSquare } from "lucide-react";
import Link from "next/link";

import { UpArrow, DownArrow } from "~/assets/svg";
import { TagBadgeList } from "~/shared/components/tag-badge";
import { Avatar, AvatarFallback, AvatarImage } from "~/shared/components/ui";
import { ROUTES } from "~/shared/constants";
import { agoDate } from "~/shared/lib";
import type { Question } from "~/shared/types";

type QuestionCardProps = {
  item: Question;
};

export function QuestionCard({ item }: QuestionCardProps) {
  const questionHref = ROUTES.QUESTION(item._id);
  return (
    <Link
      href={questionHref}
      className="border-border hover:bg-muted/40 block rounded-lg border p-4 transition-colors"
    >
      <h2 className="text-sm leading-snug font-medium md:text-base">
        {item.title}
      </h2>
      <div className="mt-2 flex flex-wrap gap-2">
        <TagBadgeList
          tagClassName="pr-0 w-fit"
          tags={item.tags}
          as="span"
          className="flex flex-row"
        />
      </div>
      <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="text-muted-foreground flex items-center gap-2">
          <Avatar className="h-5 w-5">
            <AvatarImage src={item.author.profileUrl} alt={item.author.name} />
            <AvatarFallback className="text-[10px]">
              {item.author.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <span className="text-xs">{item.author.name}</span>
          <span className="bg-muted-foreground inline-block h-1 w-1 rounded-full" />
          <span className="text-[10px]">asked {agoDate(item.createdAt)}</span>
        </div>
        <div className="text-muted-foreground flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2 text-[10px]">
            <span className="flex items-center gap-px">
              <UpArrow className="h-3 w-3" />
              <span>{item.stats.upVote}</span>
            </span>
            <span className="flex items-center gap-px">
              <DownArrow className="h-3 w-3" />
              <span>{item.stats.downVote}</span>
            </span>
            <span className="flex items-center gap-px">
              <MessageSquare size={10} />
              <span>{item.stats.answer}</span>
            </span>
            <span className="flex items-center gap-px">
              <Eye size={10} />
              <span>{item.stats.views}</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
