
import type { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import { AccountProvider } from "./account/AccountContext";

export default function KambazLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AccountProvider>
      <div id="wd-kambaz" className="min-h-screen font-sans">
        <KambazNavigation />

        <main className="min-w-0 p-3 md:ml-[120px]">
          {children}
        </main>
      </div>
    </AccountProvider>
  );
}
