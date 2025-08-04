import { Header, Footer } from "@/components";
import { AnimatedBackground } from "@/components/animated-background";
import { ReactNode } from "react";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen gap-12 px-6 pb-5 z-10 relative">
        <Header />
        <main className="flex flex-1 max-w-[1200px] w-full">{children}</main>
        <Footer />
      </div>

      <AnimatedBackground />
    </>
  );
}
