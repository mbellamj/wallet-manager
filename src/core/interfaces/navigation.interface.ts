import { pathnames } from "@/navigation";
import { HTMLAttributeAnchorTarget } from "react";

export interface NavItem {
  text: string;
  link: keyof typeof pathnames;
  target?: HTMLAttributeAnchorTarget | undefined;
}
