import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import NavLink from "./nav-link";
import MobileNav from "./mobile-nav";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full min-h-14">
      {/* Menu Mobile */}
      <MobileNav />

      <Link href="/">
        <Image alt="" src="/logo.png" width={65} height={65} />
      </Link>

      {/* Menu Desktop */}
      <nav aria-label="main menu" className="hidden md:flex">
        <ul className="flex flex-row flex-nowrap gap-8">
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
          <li>
            <NavLink href="/articles">Articles</NavLink>
          </li>
          <li>
            <NavLink href="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <ModeToggle />
    </header>
  );
}
