"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useWeb3Context } from "@/hooks/use-web3-context";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { ConnectorCard } from "./card";

interface ConnectorPickerProps {}

export const ConnectorPicker: FC<ConnectorPickerProps> = () => {
  const t = useTranslations("Connector.picker");
  const { providers } = useWeb3Context();

  return (
    <Command>
      <CommandInput placeholder={`${t("inputPlaceholder")}...`} />
      <CommandList>
        <CommandEmpty>{t("emptyCommandText")}</CommandEmpty>
        <CommandGroup>
          {providers.map((provider) => (
            <CommandItem key={provider.name}>
              <ConnectorCard provider={provider} />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
