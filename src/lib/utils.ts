import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitArray<T>(
  array: Array<T>,
  numParts: number
): Array<Array<T>> {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i += 1) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }

  return result;
}
