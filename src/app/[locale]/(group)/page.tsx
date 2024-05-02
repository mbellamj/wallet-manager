import { ConnectWallet } from "@/components/app/connect-wallet";
import { Main } from "@/components/common/main";

export default function HomePage() {
  return (
    <Main className="lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <ConnectWallet />
        </div>
      </div>
    </Main>
  );
}
