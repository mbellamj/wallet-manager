import { MetaMask } from "@web3-react/metamask";
import { Connector } from "@web3-react/types";
import { Phantom } from "web3-react-phantom";

export function getConnectorName(connector: Connector) {
  if (connector instanceof MetaMask) return "MetaMask";
  if (connector instanceof Phantom) return "Phantom";
  return "Unknown";
}

export const detectMetaMask = (window: Window) => {
  return window?.ethereum?.isMetaMask;
};

export const detectPhantom = (window: Window) => {
  return (window as any).phantom?.solana?.isPhantom;
};

export const getWalletDetectionFn =
  (key: string) => (window: Window, navigator: Navigator) => {
    switch (key.toLowerCase()) {
      case "metamask":
        return Boolean(detectMetaMask(window));
      case "phantom":
        return Boolean(detectPhantom(window));
      default:
        return false;
    }
  };
