import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface MainProps extends PropsWithChildren {
  className?: string;
}

export const Main: FC<MainProps> = ({ className, children }) => {
  return (
    <main
      className={cn(
        "grid flex-1 items-start gap-4 p-4",
        "sm:px-6 sm:py-0 md:gap-8",
        className
      )}
    >
      {children}
    </main>
  );
};
