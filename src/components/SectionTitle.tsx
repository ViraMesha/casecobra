import { cn } from "@/lib/utils";
import { Icons } from "./index";

export const SectionTitle = ({
  title,
  highlightedText,
  highlightColor = "text-green-500",
  hasUnderline = false,
  spanStyles,
}: SectionTitleProps) => {
  return (
    <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
      {title.split(highlightedText)[0]}
      <span className={cn("relative px-2", spanStyles)}>
        {highlightedText}
        {hasUnderline && (
          <Icons.underline
            className={`hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 ${highlightColor}`}
          />
        )}
      </span>
      {title.split(highlightedText)[1]}
    </h2>
  );
};
