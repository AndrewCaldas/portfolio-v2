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
          <NavLink href="/about">About</NavLink>
          <NavLink href="/articles" isDisabled>
            Articles
          </NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </ul>
      </nav>

      <ModeToggle />
    </header>
  );
}
