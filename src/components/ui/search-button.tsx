import { SearchIcon } from "~/assets/svg";
import { cn } from "~/lib";
import React from "react";

export type SearchButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    onlyIcon?: boolean;
  };

export function SearchButton({
  className,
  onlyIcon = false,
  ...props
}: SearchButtonProps) {
  return (
    <button
      type="button"
      aria-label="Open search"
      {...props}
      className={cn(
        "relative flex items-center rounded-md transition-all",
        !onlyIcon &&
          "border-border/80 bg-muted/50 text-muted-foreground border",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:ring-ring/50 outline-none focus-visible:ring-[3px]",
        onlyIcon
          ? "h-9 w-9 justify-center p-0"
          : "h-9 w-full gap-2 pr-4 pl-2 sm:pr-14",
        className,
      )}
    >
      {onlyIcon ? (
        <span
          className="md:bg-accent border-border inline-flex items-center gap-1 rounded-full p-1 md:border md:px-2"
          aria-hidden
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="-ml-0.5 size-4 fill-gray-600 dark:fill-gray-500"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            />
          </svg>
          <kbd className="hidden font-sans text-xs/4 text-gray-500 md:block dark:text-gray-400">
            Ctrl&nbsp;K
          </kbd>
        </span>
      ) : (
        <>
          <SearchIcon className="size-5 shrink-0" />
          <span className="opacity-70">Search for anything...</span>

          <kbd
            className={cn(
              "absolute top-1/2 right-2 -translate-y-1/2",
              "hidden h-5 items-center gap-1 md:flex",
              "border-border bg-accent/50 rounded border",
              "px-1.5 font-mono text-[10px] font-medium opacity-90 select-none",
            )}
          >
            Ctrl <span>K</span>
          </kbd>
        </>
      )}
    </button>
  );
}
