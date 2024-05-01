import { initializeConnector } from "@web3-react/core";
import { Phantom } from "web3-react-phantom";

export const [connector, hooks] = initializeConnector(
  (actions) => new Phantom({ actions })
);
