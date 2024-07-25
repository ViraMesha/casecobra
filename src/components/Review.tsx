import { POSSIBLE_ANIMATIONS_DELAYS } from "@/constants";
import { cn } from "@/lib/utils";
import { Phone } from "./index";

export const Review = ({ imgSrc, className, ...props }: ReviewProps) => {
  const animationDelay =
    POSSIBLE_ANIMATIONS_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATIONS_DELAYS.length)
    ];
  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Phone imgSrc={imgSrc} className="rounded-[2.25rem]" />
    </div>
  );
};
