import { Button } from "./button";
import { cn } from "~/lib";

type SocialButtonProps = {
  icon: React.ReactNode;
  name: string;
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function SocialButtons({
  icon,
  name,
  label,
  className,
  ...props
}: SocialButtonProps) {
  return (
    <Button {...props} className={cn("flex-1 rounded-xl text-xs", className)}>
      {icon}
      <span className="font-space-grotesk font-semibold">{label}</span>
    </Button>
  );
}
export { SocialButtons };
