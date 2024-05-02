import { Aside } from "@/components/app/aside";
import { Header } from "@/components/app/header";
import { cn } from "@/lib/utils";
import { LayoutProps } from "@/types";
import { FC } from "react";

const PageLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Aside className="w-14 fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background sm:flex" />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header
          className={cn(
            "sticky top-0 z-30 flex h-14 items-center gap-4 border-b",
            "bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
          )}
        />
        {children}
      </div>
    </>
  );
};

export default PageLayout;
