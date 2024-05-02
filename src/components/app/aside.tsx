import { cn } from "@/lib/utils";
import { FC } from "react";
import { NavigationLinks } from "../common/navigation-links";

interface AsideProps {
  className?: string;
}

export const Aside: FC<AsideProps> = ({ className }) => {
  return (
    <aside className={className}>
      <NavigationLinks
        className="flex flex-col items-center gap-4 px-2 sm:py-5"
        logoClassName="h-4 w-4"
        logoLinkClassName={cn(
          "group flex h-9 w-9 shrink-0 items-center justify-center",
          "gap-2 rounded-full bg-primary text-lg font-semibold",
          "text-primary-foreground md:h-8 md:w-8 md:text-base"
        )}
        linkClassName={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg",
          "transition-colors hover:text-foreground md:h-8 md:w-8"
        )}
        activeLinkClassName="text-accent-foreground"
        inactiveLinkClassName="text-muted-foreground"
      />
    </aside>
  );
};
