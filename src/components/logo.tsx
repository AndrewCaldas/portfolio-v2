import Link from "next/link";
import { ReactNode } from "react";

export function Logo({ children }: { children: ReactNode }) {
  return (
    <Link href="/">
      <p className="font-elegant text-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
        {children}
      </p>
    </Link>
  );
}
