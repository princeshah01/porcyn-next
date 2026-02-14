import { Button } from "~/shared/components/ui";
import { cn } from "~/shared/lib";

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
    <Button
      {...props}
      size="sm"
      className={cn("min-h-9 flex-1 rounded-xl text-xs", className)}
    >
      {icon}
      <span className="font-space-grotesk font-semibold">{label}</span>
    </Button>
  );
}
export { SocialButtons };
