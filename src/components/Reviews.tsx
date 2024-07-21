import Image from "next/image";
import { Check } from "lucide-react";
import { Icons, MaxWidthWrapper, StarRating } from "./index";
import { reviews } from "@/constants";

export const Reviews = () => {
  return (
    <section className="bg-slate-100 py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
            What our{" "}
            <span className="relative px-2">
              customers{" "}
              <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-500" />
            </span>
            say
          </h2>
          <Image
            width={96}
            height={82}
            src="/snake-2.png"
            alt="snake"
            className="w-24 order-0 lg:order-2"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20"
            >
              <StarRating
                containerStyles="flex gap-0.5 mb-2"
                starStyles="w-5 h-5"
              />
              <div className="text-lg leading-8">
                <p>&quot;{review.text}&quot;</p>
              </div>
              <div className="flex gap-4 mt-2">
                <Image
                  width={48}
                  height={48}
                  src={review.user.image}
                  alt={review.user.name}
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">{review.user.name}</p>
                  {review.user.isVerified && (
                    <div className="flex gap-1.5 items-center text-zinc-600">
                      <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                      <p className="text-sm">Verified Purchase</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
