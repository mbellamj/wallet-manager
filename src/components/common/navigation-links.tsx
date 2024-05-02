"use client";

import { NavItem } from "@/core/interfaces/navigation.interface";
import { fetcher, getIcon } from "@/lib/utils";
import { FC } from "react";
import useSWR from "swr";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Icon } from "./icon";
import { Logo } from "./logo";
import { NavigationLink } from "./navigation-link";

interface NavigationLinkProps {
  className?: string;
  logoClassName?: string;
  logoLinkClassName?: string;
  linkClassName?: string;
  activeLinkClassName?: string;
  inactiveLinkClassName?: string;
}

export const NavigationLinks: FC<NavigationLinkProps> = ({
  className,
  logoClassName,
  logoLinkClassName,
  linkClassName,
  activeLinkClassName,
  inactiveLinkClassName,
}) => {
  const { data, error } = useSWR<NavItem[]>("/api/navigation-links", fetcher);

  if (error || !data) return null;

  return (
    <nav className={className}>
      <Logo className={logoLinkClassName} iconClassName={logoClassName} />
      {data.map(({ link, text, target }, idx) => (
        <Tooltip key={`${text}-${idx}`}>
          <TooltipTrigger asChild>
            <NavigationLink
              href={link}
              target={target}
              className={linkClassName}
              activeClassName={activeLinkClassName}
              inactiveClassName={inactiveLinkClassName}
            >
              <Icon className="h-5 w-5" name={getIcon(text)} />
              <span className="sm:sr-only capitalize">{text}</span>
            </NavigationLink>
          </TooltipTrigger>
          <TooltipContent side="right">{text}</TooltipContent>
        </Tooltip>
      ))}
    </nav>
  );
};
