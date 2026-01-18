import Link from "next/link";

import { Badge } from "~/shared/components/ui";
import { TAG_ICON_MAP } from "~/shared/constants";
import { cn } from "~/shared/lib";

interface Props {
  tags: { _id: string; name: string; count?: number }[];
  showCount?: boolean;
  className?: string;
  tagClassName?: string;
  as?: typeof Link | "span";
}
interface TagBadgeProps {
  name: string;
  count?: number;
  showCount?: boolean;
  className?: string;
  as?: typeof Link | "span";
}

const TagBadgeList = ({
  tags,
  showCount,
  className,
  tagClassName,
  as,
}: Props) => {
  return (
    <ul className={cn("flex flex-col flex-wrap gap-2", className)}>
      {tags.map((tag, idx) => (
        <TagBadge
          as={as}
          {...tag}
          key={tag?._id || idx}
          showCount={showCount}
          className={tagClassName}
        />
      ))}
    </ul>
  );
};

const getIconClassName = (name: string) => {
  const normalizedName = name.toLowerCase().replace(/\s+/g, "");
  const iconClass = TAG_ICON_MAP[normalizedName];
  return iconClass || "devicon-htmx-plain";
};

const TagBadge = ({
  name,
  count,
  showCount = false,
  className,
  as,
}: TagBadgeProps) => {
  const iconClassName = getIconClassName(name);
  const TagWrapper = as || Link;
  return (
    <TagWrapper
      className={cn("group flex w-full justify-between pr-5", className)}
      href={`/tags/${name}`}
    >
      <Badge
        className={cn("border-border flex rounded-md px-1 text-[8px]")}
        variant="secondary"
      >
        <i className={iconClassName}></i>
        <span>{name.toUpperCase()}</span>
      </Badge>
      {showCount && (
        <span className="group-hover:text-foreground text-foreground/70 ml-1 text-[8px]">
          {count}
        </span>
      )}
    </TagWrapper>
  );
};

export { TagBadgeList, TagBadge };
