import { Web3Provider } from "@/core/interfaces/web3.interface";
import { Web3ReactHooks } from "@web3-react/core";
import Image from "next/image";
import { FC } from "react";
import { ConnectorStatus } from "./status";

interface ConnectorProviderProps {
  provider: Web3Provider;
  isActivating: ReturnType<Web3ReactHooks["useIsActivating"]>;
  isActive: ReturnType<Web3ReactHooks["useIsActive"]>;
  error?: Error;
}

export const ConnectorProvider: FC<ConnectorProviderProps> = ({
  provider,
  isActivating,
  isActive,
  error,
}) => {
  return (
    <>
      <Image
        src={provider.imageURL}
        width={40}
        height={40}
        alt={provider.name}
        className="overflow-hidden rounded-md"
      />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none first-letter:capitalize">
          {provider.name}
        </p>
      </div>
      <ConnectorStatus
        isInstalled={provider.installed}
        isActivating={isActivating}
        isActive={isActive}
        error={error}
      />
    </>
  );
};
