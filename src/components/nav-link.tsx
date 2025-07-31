"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`group relative inline-block uppercase transition-colors duration-300 text-muted-foreground hover:text-zinc-950 dark:hover:text-zinc-100 ${
        isActive &&
        "font-semibold text-zinc-950 dark:text-zinc-100 rounded-sm cursor-default"
      }`}
    >
      <span
        className={`after:absolute after:bottom-[-4px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:bg-current after:content-[''] after:transition-all after:duration-300 group-hover:after:w-5 ${
          isActive && "after:invisible"
        }`}
      ></span>
      {children}
    </Link>
  );
}
