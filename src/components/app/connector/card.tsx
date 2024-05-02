"use client";

import { Web3Provider } from "@/core/interfaces/web3.interface";
import { useWeb3Connector } from "@/hooks/use-web3-connector";
import { FC } from "react";
import { ConnectorProvider } from "./provider";

interface ConnectorCardProps {
  provider: Web3Provider;
}

export const ConnectorCard: FC<ConnectorCardProps> = ({ provider }) => {
  const { handleToggleConnect, isActivating, isActive, error } =
    useWeb3Connector(provider.name);

  return (
    <div
      className="flex items-center space-x-4 rounded-md border p-4 w-full"
      onClick={handleToggleConnect}
    >
      <ConnectorProvider
        provider={provider}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      />
    </div>
  );
};
