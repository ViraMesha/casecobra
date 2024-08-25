"use client";

import { usePathname } from "next/navigation";
import { STEPS } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Steps = () => {
  const pathname = usePathname();
  return (
    <ol className="rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
      {STEPS.map((step, index) => {
        const { name, description, url } = step;
        const isCurrent = pathname.endsWith(url);
        // Define a constant variable `isCompleted` that will be `true` or `false`
        // depending on whether any of the remaining steps' URLs match the current pathname.
        const isCompleted = STEPS.slice(index + 1).some((step) =>
          pathname.endsWith(url)
        );
        const imgPath = `/snake-${index + 1}.png`;
        return (
          <li key={name} className="relative overflow-hidden lg:flex-1">
            <div>
              <span
                className={cn(
                  "absolute lef-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full",
                  { "bg-zinc-700": isCurrent, "bg-primary": isCompleted }
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  index !== 0 ? "lg:pl-9" : "",
                  "flex items-center px-6 py-4 text-sm font-medium"
                )}
              >
                <span className="flex-shrink-0">
                  <Image
                    width={80}
                    height={80}
                    src={imgPath}
                    alt=""
                    className={cn("flex-center h-20 w-20 object-contain", {
                      "border-none": isCompleted,
                      "border-zinc-700": isCurrent,
                    })}
                  />
                </span>
                <span className="ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center">
                  <span
                    className={cn("text-sm font-semibold text-zinc-700", {
                      "text-primary": isCompleted,
                      "text-zinc-700": isCurrent,
                    })}
                  >
                    {name}
                  </span>
                  <span className="text-sm text-zinc-500">{description}</span>
                </span>
              </span>
              {/* separator */}
              {index !== 0 ? (
                <div className="absolute inset-0 hidden w-3 lg:block">
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 12 82"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0.5 0V31L10.5 41L0.5 51V82"
                      stroke="currentcolor"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
};
