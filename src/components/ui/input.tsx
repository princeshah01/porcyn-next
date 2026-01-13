"use client";
import { cn } from "~/lib";
import { Eye, EyeClosed } from "lucide-react";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const [show, setShow] = React.useState(false);
    const isPassword = type === "password";

    return (
      <div className={cn("relative w-full", !isPassword && "contents")}>
        <input
          ref={ref}
          type={isPassword ? (show ? "text" : "password") : type}
          className={cn(
            "border-border bg-input text-foreground placeholder:text-muted-foreground/70 focus-visible:border-primary/50 focus-visible:ring-primary/20 flex h-9 w-full rounded-lg border px-3 py-2 text-sm shadow-sm shadow-black/5 transition-shadow focus-visible:ring-[3px] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            type === "search" &&
              "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
            type === "file" &&
              "text-muted-foreground/70 file:border-input file:text-foreground p-0 pr-3 italic file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic",
            "aria-invalid:border-destructive/70 focus-visible:aria-invalid:border-destructive/70 focus-visible:aria-invalid:ring-destructive/20",
            isPassword && "pr-10",
            className,
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            aria-label={show ? "Hide password" : "Show password"}
            aria-pressed={show}
            className="text-muted-foreground hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/20 absolute top-1/2 right-2 -translate-y-1/2 rounded-md p-1 transition-all focus-visible:ring-[3px] focus-visible:outline-none"
          >
            {show ? (
              <EyeClosed size={18} className="opacity-50" />
            ) : (
              <Eye size={18} className="opacity-50" />
            )}
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
