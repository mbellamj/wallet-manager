"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { ConnectWalletDialog } from "./dialog";

interface ConnectWalletProps {}

export const ConnectWallet: FC<ConnectWalletProps> = () => {
  const t = useTranslations("ConnectWallet.card");

  return (
    <Card className="sm:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle className="first-letter:capitalize">{t("title")}</CardTitle>
      </CardHeader>
      <CardFooter>
        <ConnectWalletDialog />
      </CardFooter>
    </Card>
  );
};
