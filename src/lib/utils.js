import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  // Filter out falsy values and join classes
  const classes = inputs.filter(Boolean).join(' ');
  return twMerge(classes);
}
