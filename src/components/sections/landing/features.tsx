import { FeatureCard } from "~/components/ui";
import { FEATURESDATA } from "~/constants";

export function FeatureSection() {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="border-border/80 flex h-12 w-full items-center justify-center border-b">
        <div className="border-border/80 flex h-12 w-full items-center justify-center border-x md:w-5/6">
          <h2 className="text-muted-foreground font-space-grotesk text-[13px] tracking-wider">
            Explore Our Features
          </h2>
        </div>
      </div>
      <div className="divide-border/80 border-border/80 grid w-full flex-1 grid-cols-1 divide-y border-x md:w-5/6 md:grid-cols-3 md:divide-x md:divide-y-0">
        {FEATURESDATA.map((item) => (
          <FeatureCard key={item.icon} {...item} />
        ))}
      </div>
    </section>
  );
}
