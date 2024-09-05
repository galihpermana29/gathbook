import { BookSectionLoading } from "./_components/books-section";
import { HeroSection } from "./_components/hero-section";

export default function LoadingRoot() {
  return (
    <div className="flex h-[calc(100dvh-80px)] flex-grow flex-col gap-x-8 gap-y-12 overflow-hidden">
      <HeroSection />
      <BookSectionLoading />
    </div>
  );
}
