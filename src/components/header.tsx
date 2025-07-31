import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full min-h-14">
      <Link href="/">
        <Image alt="" src="/logo.png" width={60} height={60} />
      </Link>

      <nav aria-label="main menu">
        <ul className="flex flex-row gap-6">
          <li>
            <NavLink href="/about">About me</NavLink>
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
