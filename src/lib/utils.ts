import { IconName } from "@/core/interfaces/icon.interface";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getIcon = (text: string): IconName => {
  switch (text.toLowerCase()) {
    case "dashboard":
      return "layout-dashboard";
    case "analytics":
      return "line-chart";
    case "settings":
      return "settings";
    case "tokens":
      return "dollar-sign";
    default:
      return "home";
  }
};

export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());
