import Header from "@/components/header";
import { ReactNode } from "react";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-rows-[min-content_max-content] gap-5 p-5">
      <Header />
      <div className="mx-auto max-w-[1600px] w-full">{children}</div>
    </div>
  );
}
