import Link from "next/link";

import { RainbowButton, SearchButton } from "~/shared/components/ui";

export function Hero() {
  return (
    <section className="border-border/80 flex min-h-[calc(100vh-3rem)] w-full flex-col items-center justify-center border-b px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        Dig Deeper. Learn Smarter. Build Better.
      </h1>

      <p className="mt-4 max-w-2xl text-base opacity-80 md:text-lg">
        Porcyn is a developer-first platform for those who go beyond the surface
        — explore concepts, ask meaningful questions, get AI-powered answers,
        and grow with clarity and curiosity.
      </p>

      <div className="mt-8 flex flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <RainbowButton asChild className="w-full md:w-fit">
          <Link href="/sign-in">Ask Question</Link>
        </RainbowButton>
        <SearchButton />
      </div>
    </section>
  );
}
