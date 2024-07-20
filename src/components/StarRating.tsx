import { Star } from "lucide-react";

export const StarRating = () => {
  return (
    <div className="flex flex-col justify-between items-center sm:items-start">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="w-4 h-4 text-green-600 fill-green-600" />
        ))}
      </div>
      <p>
        <span className="font-semibold">1.250</span> happy customers
      </p>
    </div>
  );
};
