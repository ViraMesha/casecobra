import { Star } from "lucide-react";

export const StarRating = ({
  containerStyles,
  starStyles,
  starsNumber = 5,
}: StarRatingProps) => {
  return (
    <div className={containerStyles}>
      {Array.from({ length: starsNumber }, (_, i) => (
        <Star
          key={i}
          className={`text-green-600 fill-green-600 ${starStyles}`}
        />
      ))}
    </div>
  );
};
