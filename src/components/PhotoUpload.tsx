import Image from "next/image";
import { MaxWidthWrapper, Phone, SectionTitle } from "./index";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const PhotoUpload = () => {
  return (
    <section>
      <MaxWidthWrapper className="py-24">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <SectionTitle
              title="Upload your photo and get your own case"
              highlightedText="your own case"
              spanStyles="bg-green-600 text-white"
            />
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
            <Image
              width={126}
              height={31}
              src="/arrow.png"
              alt="arrow"
              className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0 pointer-events-none select-none"
            />
            <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
              <Image
                width={384}
                height={576}
                src="/horse.jpg"
                alt="horse"
                className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"
              />
            </div>
            <Phone className="w-60" imgSrc="/horse_phone.jpg" />
          </div>
        </div>
        <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
          <li className="w-fit">
            <Check className="w-5 h-5 text-green-600 inline mr-1.5" />
            High-quality silicone material
          </li>
          <li className="w-fit">
            <Check className="w-5 h-5 text-green-600 inline mr-1.5" />
            Scratch- and fingerprint resistent coating
          </li>
          <li className="w-fit">
            <Check className="w-5 h-5 text-green-600 inline mr-1.5" />
            Wireless charging compatible
          </li>
          <li className="w-fit">
            <Check className="w-5 h-5 text-green-600 inline mr-1.5" />5 years
            print warranty
          </li>
          <li className="flex justify-center">
            <Link
              href="/configure/upload"
              className={buttonVariants({
                size: "lg",
                className: "mx-auto mt-8",
              })}
            >
              Create your case now <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </li>
        </ul>
      </MaxWidthWrapper>
    </section>
  );
};
