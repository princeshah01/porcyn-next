import Link from "next/link";

import { Badge } from "~/shared/components/ui";
import { TAG_ICON_MAP } from "~/shared/constants";
import { cn } from "~/shared/lib";

interface Props {
  tags: { _id: string; name: string; count?: number }[];
  showCount?: boolean;
  className?: string;
}
interface TagBadgeProps {
  name: string;
  count?: number;
  showCount?: boolean;
}

const TagBadgeList = ({ tags, showCount, className }: Props) => {
  return (
    <ul className={cn("flex flex-col flex-wrap gap-2", className)}>
      {tags.map((tag, idx) => (
        <TagBadge {...tag} key={tag?._id || idx} showCount={showCount} />
      ))}
    </ul>
  );
};

const getIconClassName = (name: string) => {
  const normalizedName = name.toLowerCase().replace(/\s+/g, "");
  const iconClass = TAG_ICON_MAP[normalizedName];
  return iconClass || "devicon-htmx-plain";
};

const TagBadge = ({ name, count, showCount = false }: TagBadgeProps) => {
  const iconClassName = getIconClassName(name);
  return (
    <Link
      className="group flex w-full justify-between pr-5"
      href={`/tags/${name}`}
    >
      <Badge className="flex rounded-md px-1 text-[8px]" variant="secondary">
        <i className={iconClassName}></i>
        <span>{name.toUpperCase()}</span>
      </Badge>
      {showCount && (
        <span className="group-hover:text-foreground text-foreground/70 ml-1 text-[8px]">
          {count}
        </span>
      )}
    </Link>
  );
};

export { TagBadgeList, TagBadge };
