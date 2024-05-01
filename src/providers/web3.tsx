"use client";

import { Web3Provider } from "@/core/interfaces/web3.interface";
import { connectors } from "@/web3/connectors";
import { allowedWeb3Providers } from "@/web3/next.web3";
import { getWalletDetectionFn } from "@/web3/utils";
import { Web3ReactProvider } from "@web3-react/core";
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface Web3ContextProps {
  providers: Web3Provider[];
  setProviders: Dispatch<SetStateAction<Web3Provider[]>>;
}

interface Web3ProviderProps extends PropsWithChildren {}

export const Web3Context = createContext<Web3ContextProps>({
  providers: [],
  setProviders: () => {
    throw new Error("Function not implemented.");
  },
});

export const Web3ContextProvider: FC<Web3ProviderProps> = ({ children }) => {
  const [providers, setProviders] = useState<Array<Web3Provider>>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const result = allowedWeb3Providers.map((provider) => ({
        ...provider,
        installed: getWalletDetectionFn(provider.name)(window, navigator),
      }));
      setProviders(result);
    }
  }, []);

  const value: Web3ContextProps = {
    providers,
    setProviders,
  };

  return (
    <Web3Context.Provider value={value}>
      <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
    </Web3Context.Provider>
  );
};
