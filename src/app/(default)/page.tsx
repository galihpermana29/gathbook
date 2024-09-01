import type { Metadata } from "next";

import { HeroSection } from "./_components/hero-section";
import { ReviewsSection } from "./_components/reviews-section";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-x-8 gap-y-12 py-4 lg:py-8">
      <HeroSection />
      <ReviewsSection />
    </div>
  );
}
