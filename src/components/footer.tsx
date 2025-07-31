import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";
import { InteractiveIcon } from "./interactive-icon";

const socialIcons = [
  {
    href: "/",
    alt: "linkedin icon",
    component: (
      <LinkedinIcon className="text-zinc-700 dark:text-muted-foreground w-5 h-5" />
    ),
  },
  {
    href: "/",
    alt: "github icon",
    component: (
      <GithubIcon className="text-zinc-700 dark:text-muted-foreground w-5 h-5" />
    ),
  },
  {
    href: "/",
    alt: "instagram icon",
    component: (
      <InstagramIcon className="text-zinc-700 dark:text-muted-foreground w-5 h-5" />
    ),
  },
];

export function Footer() {
  return (
    <footer className="flex flex-row w-full justify-center items-center gap-4">
      <div className="mx-auto flex w-fit gap-5 rounded-2xl backdrop-blur-xs px-4 py-3 bg-gray-50/60 dark:bg-neutral-900/60 items-end">
        {socialIcons?.map((icon, index) => (
          <InteractiveIcon key={index} href="/">
            {icon.component}
          </InteractiveIcon>
        ))}
      </div>
    </footer>
  );
}
