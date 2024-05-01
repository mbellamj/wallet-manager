import { Web3Context } from "@/providers/web3";
import { useContext } from "react";

export function useWeb3Context() {
  const value = useContext(Web3Context);

  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error(
        "useWeb3Context must be wrapped in a <Web3ContextProvider />"
      );
    }
  }

  return value;
}
