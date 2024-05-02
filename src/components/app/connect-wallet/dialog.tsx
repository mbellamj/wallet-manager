"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { ConnectorPicker } from "../connector/picker";

interface ConnectWalletDialogProps {}

export const ConnectWalletDialog: FC<ConnectWalletDialogProps> = () => {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("ConnectWallet.dialog");

  return (
    <Dialog open={visible} onOpenChange={setVisible}>
      <DialogTrigger asChild>
        <Button>
          <span className="first-letter:capitalize">{t("trigger")}</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="first-letter:capitalize">
            {t("title")}
          </DialogTitle>
          <DialogDescription className="max-w-lg text-balance leading-relaxed first-letter:capitalize">
            {t("description")}
          </DialogDescription>
        </DialogHeader>
        <ConnectorPicker />
      </DialogContent>
    </Dialog>
  );
};
