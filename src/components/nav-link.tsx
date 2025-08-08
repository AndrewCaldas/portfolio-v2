"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  isDisabled?: boolean;
  children: ReactNode;
}

export default function NavLink({ href, isDisabled, children }: NavLinkProps) {
  const pathName = usePathname();
  const isActive = pathName === href;

  if (isDisabled) return null;

  return (
    <li>
      <Link
        href={href}
        className={`group relative text-nowrap inline-block uppercase transition-colors duration-300 text-muted-foreground pl-6 md:pl-0 hover:text-zinc-950 dark:hover:text-zinc-100 ${
          isActive &&
          "font-semibold text-zinc-950 dark:text-zinc-100 cursor-default"
        }`}
      >
        <span
          className={`hidden md:flex after:absolute after:bottom-[-4px] after:left-1/2 after:translate-x-[-50%] after:h-[2px] after:w-0 after:bg-current after:content-[''] after:transition-all after:duration-300 group-hover:after:w-5 ${
            isActive && "after:invisible"
          }`}
        ></span>
        {children}
      </Link>
    </li>
  );
}
