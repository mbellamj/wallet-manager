import { Web3ReactHooks } from "@web3-react/core";
import { ConnectorType } from "../types";
import { connector as empty, hooks as useEmpty } from "./empty";
import { connector as metaMask, hooks as useMetaMask } from "./metamask";
import { connector as phantom, hooks as usePhantom } from "./phantom";

export const connectors: [ConnectorType, Web3ReactHooks][] = [
  [phantom, usePhantom],
  [metaMask, useMetaMask],
  [empty, useEmpty],
];

export const connectorsMap: Record<string, [ConnectorType, Web3ReactHooks]> = {
  phantom: [phantom, usePhantom],
  metamask: [metaMask, useMetaMask],
  empty: [empty, useEmpty],
};
