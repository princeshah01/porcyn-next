import { Logo } from "~/assets/svg";

type LogoWithNameProps = {
  size?: "default" | "small" | "large";
};

const LogoWithName = ({ size = "default" }: LogoWithNameProps) => {
  const logoSizeClass =
    size === "small" ? "h-6 w-6" : size === "large" ? "h-10 w-10" : "h-7 w-7";
  const textSizeClass =
    size === "small" ? "text-sm" : size === "large" ? "text-3xl" : "text-2xl";
  return (
    <div className="flex items-center gap-1">
      <Logo className={logoSizeClass} />
      <span className={`${textSizeClass} font-normal font-space-grotesk`}>
        porcyn
      </span>
    </div>
  );
};

export { LogoWithName };
