import { connectorsMap } from "@/web3/connectors";
import { useState } from "react";

export const useWeb3Connector = (connectorName: string) => {
  const [connector, hooks] = connectorsMap[connectorName.toLowerCase()];

  const { useIsActive, useIsActivating } = hooks;

  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const [error, setError] = useState<Error | undefined>(undefined);

  const handleToggleConnect = () => {
    setError(undefined); // clear error state

    if (isActive) {
      if (connector?.deactivate) {
        void connector?.deactivate();
      } else {
        void connector?.resetState();
      }
    } else if (!isActivating) {
      Promise.resolve(connector?.activate(1)).catch((e) => {
        connector?.resetState();
        setError(e);
      });
    }
  };

  return { isActive, isActivating, error, handleToggleConnect };
};
