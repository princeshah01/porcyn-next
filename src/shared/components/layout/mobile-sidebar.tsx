"use client";

import React from "react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  Button,
} from "~/shared/components/ui";
import { cn } from "~/shared/lib";

type MobileSidebarProps = {
  className?: string;
  children: React.ReactNode;
};

const MobileSidebar = ({ className, children }: MobileSidebarProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "border-border/80 bg-background fixed inset-x-0 top-14 z-40 flex h-7 items-center border-b px-4 lg:hidden",
        className,
      )}
    >
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            type="button"
            aria-label="Open menu"
            className="inline-flex h-full items-center justify-center rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 6.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              />
            </svg>
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          overlayClassName="top-[84px] h-[calc(100vh-84px)]"
          className={cn(
            "border-border/80 bg-background",
            "top-21 h-[calc(100vh-84px)]",
            "p-0 [&>button]:hidden",
          )}
        >
          <SheetTitle className="sr-only">Mobile menu</SheetTitle>

          <div className="size-full p-3" onClick={() => setOpen(false)}>
            {children}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export { MobileSidebar };
