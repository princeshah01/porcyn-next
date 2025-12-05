import { Footer } from "./footer";
import { Hero } from "./hero";
import { LandingLayout } from "./layout";

export function LandingPage() {
  return (
    <LandingLayout>
      <div className="w-full">
        <Hero />
        <Footer />
      </div>
    </LandingLayout>
  );
}
