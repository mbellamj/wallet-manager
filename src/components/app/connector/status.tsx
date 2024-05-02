"use client";

import { Badge } from "@/components/ui/badge";
import { Web3ProviderStatus } from "@/core/interfaces/web3.interface";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { FC, useMemo } from "react";

interface StatusProps {
  isActivating: boolean;
  isActive: boolean;
  isInstalled?: boolean;
  error?: Error;
}

export const Status: FC<StatusProps> = ({
  isActivating,
  isActive,
  isInstalled,
  error,
}) => {
  const t = useTranslations("web3Provider.status");

  const statusInfo = useMemo(() => {
    let title = "";
    let desc;
    let bgColor = "";

    if (!isInstalled) {
      title = t(Web3ProviderStatus.INSTALL);
    } else if (error) {
      title = error.name;
      desc = error.message;
      bgColor = "bg-red-400";
    } else if (isActivating) {
      title = t(Web3ProviderStatus.CONNECTING);
      bgColor = "bg-yellow-600";
    } else if (isActive) {
      title = t(Web3ProviderStatus.CONNECTED);
      bgColor = "bg-green-400";
    } else {
      title = t(Web3ProviderStatus.DISCONNECTED);
      bgColor = "bg-yellow-400";
    }

    return { title, desc, bgColor };
  }, [isInstalled, isActivating, isActive, error, t]);

  return (
    <Badge className="cursor-pointer">
      {isInstalled && (
        <div className={cn("w-2 h-2 rounded-full mr-1", statusInfo.bgColor)} />
      )}
      <span className="first-letter:capitalize">{statusInfo.title}</span>
      {error && <p>{statusInfo.desc}</p>}
    </Badge>
  );
};
