import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";
import { Aside } from "../app/aside";
import { Header } from "../app/header";
import { TooltipProvider } from "../ui/tooltip";

const BaseLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <TooltipProvider>
      <div className="bg-white dark:bg-[#09090b]">
        <div className={cn("flex min-h-screen w-full flex-col", "bg-muted/40")}>
          <Aside
            className={cn(
              "w-14 fixed inset-y-0 left-0 z-10 hidden flex-col",
              "border-r bg-background sm:flex"
            )}
          />

          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <Header
              className={cn(
                "sticky top-0 z-30 flex h-14 items-center gap-4 border-b",
                "bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
              )}
            />

            {children}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default BaseLayout;
