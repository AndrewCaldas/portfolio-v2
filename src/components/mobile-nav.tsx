"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import NavLink from "./nav-link";

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-lg">Menu</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-4 mt-8">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
