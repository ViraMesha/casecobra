import Image from "next/image";
import { MaxWidthWrapper } from "../index";
import { ReviewGrid } from "./index";

export const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <Image
        width={193}
        height={143}
        aria-hidden="true"
        src="/what-people-are-buying.png"
        alt="What people are buying"
        className="absolute select-none hidden xl:block -left-32 top-1/3"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
};
