import { Header, Footer } from "@/components";
import { AnimatedBackground } from "@/components/animated-background";
import { ReactNode } from "react";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen gap-5 px-6 pb-5  z-10 relative">
        <Header />
        <main className="flex flex-1 max-w-[1600px] w-full">{children}</main>
        <Footer />
      </div>

      <AnimatedBackground />
    </>
  );
}
