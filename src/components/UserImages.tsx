import Image from "next/image";

export const UserImages = ({
  users,
  width = 40,
  height = 40,
}: UserImagesProps) => {
  return (
    <div className="flex -space-x-4">
      {users.map((user, index) => {
        const { src, alt } = user;
        return (
          <Image
            key={index}
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover"
          />
        );
      })}
    </div>
  );
};
