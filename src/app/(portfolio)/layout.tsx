import { Header, Footer } from "@/components";
import { ReactNode } from "react";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen gap-5 p-5">
      <Header />
      <main className="flex-1 mx-auto max-w-[1600px] w-full">{children}</main>
      <Footer />
    </div>
  );
}
