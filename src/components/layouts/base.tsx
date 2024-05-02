import { FC, PropsWithChildren } from "react";
import { TooltipProvider } from "../ui/tooltip";

const BaseLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        {children}
      </div>
    </TooltipProvider>
  );
};

export default BaseLayout;
