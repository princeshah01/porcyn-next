import { FeatureSection } from "./features";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { NewsLetterSignup } from "./news-letter";
import { VerticleLine } from "../../ui";

export function LandingPage() {
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
