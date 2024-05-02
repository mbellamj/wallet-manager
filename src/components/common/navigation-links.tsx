"use client";

import { NavItem } from "@/core/interfaces/navigation.interface";
import { fetcher, getIcon } from "@/lib/utils";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("NavigationLinks");

  if (error || !data) return null;

  return (
    <>
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
                <span className="sm:sr-only capitalize">{t(text)}</span>
              </NavigationLink>
            </TooltipTrigger>
            <TooltipContent side="right">{t(text)}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <NavigationLink
              href="/settings"
              className={linkClassName}
              activeClassName={activeLinkClassName}
              inactiveClassName={inactiveLinkClassName}
            >
              <Icon className="h-5 w-5" name="settings" />
              <span className="sm:sr-only capitalize">{t("settings")}</span>
            </NavigationLink>
          </TooltipTrigger>
          <TooltipContent side="right">{t("settings")}</TooltipContent>
        </Tooltip>
      </nav>
    </>
  );
};
