import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { Package2 } from "lucide-react";
import { FC } from "react";

interface LogoProps {
  className?: string;
  iconClassName?: string;
}

export const Logo: FC<LogoProps> = ({ className, iconClassName }) => {
  return (
    <Link href="/" className={className}>
      <Package2
        className={cn("transition-all group-hover:scale-110", iconClassName)}
      />
      <span className="sr-only">Acme Inc</span>
    </Link>
  );
};
