import Link from "next/link";
import { ReactNode } from "react";

interface InteractiveIconProps {
  href: string;
  children: ReactNode;
}

export function InteractiveIcon({
  href = "/",
  children,
}: InteractiveIconProps) {
  return (
    <Link
      target="_blank"
      href={href}
      className="group relative inline-flex items-center justify-center"
    >
      <div className="flex justify-center items-center aspect-square rounded-full w-10 h-10 bg-gray-200 dark:bg-neutral-800 transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-150">
        {children}
      </div>
    </Link>
  );
}
