/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ========================================

declare type MaxWidthWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

declare type User = {
  src: string;
  alt: string;
};

declare type UserImagesProps = {
  users: User[];
  width?: number;
  height?: number;
};

declare type StarProps = {
  className: string;
};

declare type PhoneProps = React.HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  darkMode?: boolean;
};

declare type StarRatingProps = React.HTMLAttributes<HTMLDivElement> & {
  containerStyles: string;
  starStyles: string;
  starsNumber?: number;
};

declare type ReviewColumnProps = {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
};

declare type ReviewProps = React.HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
};
