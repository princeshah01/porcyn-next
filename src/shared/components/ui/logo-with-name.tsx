import Link from "next/link";
import { Logo } from "~/assets/svg";
import { cn } from "~/shared/lib";
import { ROUTES } from "~/shared/constants";

type LogoWithNameProps = {
  size?: "default" | "small" | "large";
  className?: string;
};

const LogoWithName = ({ size = "default", className }: LogoWithNameProps) => {
  const logoSizeClass =
    size === "small" ? "h-6 w-6" : size === "large" ? "h-10 w-10" : "h-7 w-7";
  const textSizeClass =
    size === "small" ? "text-sm" : size === "large" ? "text-3xl" : "text-2xl";
  return (
    <Link
      href={ROUTES.HOME}
      className={cn("flex items-center gap-1", className)}
    >
      <Logo className={logoSizeClass} />
      <span className={`${textSizeClass} font-space-grotesk font-normal`}>
        porcyn
      </span>
    </Link>
  );
};

export { LogoWithName };
