import { FeatureSection } from "./features";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { LandingLayout } from "./layout";
import { NewsLetterSignup } from "./news-letter";

export function LandingPage() {
  return (
    <LandingLayout>
      <div className="w-full">
        <Hero />
        <FeatureSection />
        <NewsLetterSignup />
        <Footer />
      </div>
    </LandingLayout>
  );
}
