import Image from "next/image";

import { cn } from "~/shared/lib";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group hover:bg-muted/30 relative flex flex-col p-6 transition-colors duration-200",
        className,
      )}
    >
      <div className="from-primary/3 pointer-events-none absolute inset-0 bg-linear-to-br to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="w-full">
        <Image
          src={icon}
          alt="AI Icon"
          width={100}
          height={100}
          className="isolate object-contain opacity-80 invert dark:invert-0"
        />
      </div>
      <div className="font-space-grotesk w-full flex-1">
        <h2 className="text-accent-foreground text-lg font-semibold">
          {title}
        </h2>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
    </div>
  );
}
