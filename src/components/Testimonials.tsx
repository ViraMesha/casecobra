import Image from "next/image";
import { Check } from "lucide-react";
import { MaxWidthWrapper, Reviews, SectionTitle, StarRating } from "./index";
import { testimonials } from "@/constants";

export const Testimonials = () => {
  return (
    <section className="bg-slate-100 py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <SectionTitle
            title="What our customers say"
            highlightedText="customers"
            highlightColor="text-green-500"
            hasUnderline
          />
          <Image
            width={96}
            height={82}
            src="/snake-2.png"
            alt="snake"
            className="w-24 order-0 lg:order-2"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          {testimonials.map((testimonial, index) => {
            const {
              text,
              user: { image, name, isVerified },
            } = testimonial;
            return (
              <div
                key={index}
                className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20"
              >
                <StarRating
                  containerStyles="flex gap-0.5 mb-2"
                  starStyles="w-5 h-5"
                />
                <div className="text-lg leading-8">
                  <p>&quot;{text}&quot;</p>
                </div>
                <div className="flex gap-4 mt-2">
                  <Image
                    width={48}
                    height={48}
                    src={image}
                    alt={name}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{name}</p>
                    {isVerified && (
                      <div className="flex gap-1.5 items-center text-zinc-600">
                        <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                        <p className="text-sm">Verified Purchase</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
      <div className="pt-16">
        <Reviews />
      </div>
    </section>
  );
};
