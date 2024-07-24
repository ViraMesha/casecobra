import { cn } from "@/lib/utils";
import Image from "next/image";

export const Phone = ({
  className,
  imgSrc,
  darkMode = false,
  ...props
}: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        priority
        width={253}
        height={523}
        src={
          darkMode
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone"
        className="pointer-events-none z-50 select-none"
      />
      <div className="absolute -z-10 inset-0">
        <Image
          priority
          width={253}
          height={523}
          className="object-cover"
          alt="overlaying phone img"
          src={imgSrc}
        />
      </div>
    </div>
  );
};
