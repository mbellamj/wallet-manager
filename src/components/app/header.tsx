import { cn } from "@/lib/utils";
import { PanelLeft, Search } from "lucide-react";
import { FC } from "react";
import { NavigationLinks } from "../common/navigation-links";
import { ThemeSwitcher } from "../common/theme-switcher";
import { UserAccountMenu } from "../common/user-account-menu";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={className}>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <NavigationLinks
            className="grid gap-6 text-lg font-medium"
            logoClassName="h-5 w-5"
            logoLinkClassName={cn(
              "group flex h-10 w-10 shrink-0 items-center",
              "justify-center gap-2 rounded-full bg-primary text-lg",
              "font-semibold text-primary-foreground md:text-base"
            )}
            linkClassName={cn(
              "flex items-center gap-4 px-2.5 hover:text-foreground"
            )}
            activeLinkClassName={cn()}
            inactiveLinkClassName={cn("text-muted-foreground")}
          />
        </SheetContent>
      </Sheet>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <ThemeSwitcher />
      <UserAccountMenu />
    </header>
  );
};
