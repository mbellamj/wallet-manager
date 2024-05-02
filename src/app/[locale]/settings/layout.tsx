import { SettingsPageLayout } from "@/components/layouts/settings";
import { LayoutProps } from "@/types";
import { FC } from "react";

const SettingsLayout: FC<LayoutProps> = async ({ children }) => {
  return <SettingsPageLayout>{children}</SettingsPageLayout>;
};

export default SettingsLayout;
