import { ReviewCard } from "./review-card";

export const ReviewsSection = () => {
  return (
    <div className="no-scrollbar container grid w-full grid-flow-col items-center gap-12 overflow-x-scroll">
      {Array.from({ length: 5 }).map((_, index) => (
        <ReviewCard
          key={index}
          reviewer="George R. R. Martin"
          reviewerDescription='Author of "Fire and Blood"'
          review='"Fire and Blood" tells the story of the Targaryen dynasty in Westeros,
          chronicling the conquest of the Seven Kingdoms by House Targaryen. It
          also covers the Targaryen civil war known as the Dance of the Dragons.'
        />
      ))}
    </div>
  );
};
