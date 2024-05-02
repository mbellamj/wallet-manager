"use client";

import { Menu } from "@/core/interfaces/menu";
import { fetcher } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import useSWR from "swr";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Icon } from "./icon";

interface UserAccountMenuProps {}

export const UserAccountMenu: FC<UserAccountMenuProps> = () => {
  const { data: menus, error: menuError } = useSWR<Menu[]>(
    "/api/user-account-menu",
    fetcher
  );
  const t = useTranslations("UserAccountMenu");

  if (menuError || !menus) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <Image
            src="/vercel.svg"
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {menus.map(({ title, iconName }, idx) => (
          <DropdownMenuItem
            key={`${title}-${idx}`}
            className="flex items-center gap-2"
          >
            <Icon className="h-5 w-5" name={iconName} />
            <span className="capitalize">{t(title)}</span>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-2">
          <Icon className="h-5 w-5" name="log-out" />
          <span className="capitalize">{t("logout")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
