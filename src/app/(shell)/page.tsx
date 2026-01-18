import {
  Hero,
  FeatureSection,
  NewsLetterSignup,
  Footer,
} from "~/features/landing";
import { VerticleLine } from "~/shared/components/ui";

export default async function Page() {
  return (
    <div className="flex min-h-screen w-full pt-14">
      <VerticleLine />
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full">
          <Hero />
          <FeatureSection />
          <NewsLetterSignup />
          <Footer />
        </div>
      </div>
      <VerticleLine />
    </div>
  );
}
