import { FC, PropsWithChildren } from "react";

interface SettingsPageLayoutProps extends PropsWithChildren {}

export const SettingsPageLayout: FC<SettingsPageLayoutProps> = ({
  children,
}) => {
  return <div>{children}</div>;
};
