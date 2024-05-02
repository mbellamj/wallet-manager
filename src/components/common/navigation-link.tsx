"use client";

import { cn } from "@/lib/utils";
import { Link, pathnames } from "@/navigation";
import { useSelectedLayoutSegment } from "next/navigation";
import type { ComponentProps, FC } from "react";

interface NavigationLinkProps
  extends ComponentProps<typeof Link<keyof typeof pathnames>> {
  activeClassName?: string;
  inactiveClassName?: string;
}

export const NavigationLink: FC<NavigationLinkProps> = ({
  href,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      className={cn(className, isActive ? activeClassName : inactiveClassName)}
      {...rest}
    />
  );
};
