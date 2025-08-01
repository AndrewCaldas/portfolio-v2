import { ModeToggle } from "./mode-toggle";
import NavLink from "./nav-link";
import MobileNav from "./mobile-nav";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full min-h-14 ">
      {/* Menu Mobile */}
      <MobileNav />

      <Logo>Drew</Logo>

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
