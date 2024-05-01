import { Web3ReactHooks } from "@web3-react/core";
import { Empty } from "@web3-react/empty";
import { MetaMask } from "@web3-react/metamask";
import { Phantom } from "web3-react-phantom";

export type ConnectorType = Phantom | MetaMask | Empty;

export interface Web3ConnectorProps {
  connector: ConnectorType;
  hooks: Web3ReactHooks;
}
