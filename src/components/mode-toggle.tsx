"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const listThemes = ["light", "dark"];

export function ModeToggle() {
  const { setTheme } = useTheme();

  const [currentTheme, setCurrentTheme] = React.useState(0);

  function toggleTheme() {
    setCurrentTheme((prevTheme) => (prevTheme === 0 ? 1 : 0));

    setTheme(listThemes[currentTheme]);
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      className="size-8 cursor-pointer"
      onClick={toggleTheme}
    >
      {currentTheme === 0 ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
