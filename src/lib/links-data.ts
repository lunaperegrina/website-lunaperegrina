export type LinkItem = {
  label: string;
  description?: string;
  href: string;
  external: boolean;
};

export type SocialIcon = "github" | "bluesky" | "twitter" | "linkedin" | "instagram";

export type SocialLinkItem = LinkItem & {
  icon: SocialIcon;
};

export const socialLinks: SocialLinkItem[] = [
  {
    label: "GitHub",
    href: "https://github.com/lunaperegrina",
    external: true,
    icon: "github",
  },
  {
    label: "Bluesky",
    href: "https://bluesky.app/profile/lunaperegrina.dev",
    external: true,
    icon: "bluesky",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/lunaperegrinaa",
    external: true,
    icon: "twitter",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lunaperegrina/",
    external: true,
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lunaperegrinaa/",
    external: true,
    icon: "instagram",
  },
];

export const recommendLinks: LinkItem[] = [
  {
    label: "Monitor 4K LG baratinho",
    href: "https://mercadolivre.com/sec/2Q4L19b",
    external: true,
  },
  {
    label: "Mouse ergonômico Logitech",
    href: "https://mercadolivre.com/sec/24i6TUc",
    external: true,
  },
  {
    label: "Escrivaninha do setup",
    href: "https://amzn.to/4c670XP",
    external: true,
  },
];

export const projectLinks: LinkItem[] = [
  {
    label: "Personal Website",
    description: "Portfolio and blog built with Astro.",
    href: "https://lunaperegrina.dev",
    external: true,
  },
  {
    label: "Bluesky Followers",
    description: "Tool to track and explore Bluesky followers.",
    href: "https://bluesky-followers.lunaperegrina.dev",
    external: true,
  },
  {
    label: "TabNews CLI",
    description: "CLI app to interact with TabNews from terminal.",
    href: "https://github.com/lunaperegrina/tabnews-cli",
    external: true,
  },
];

export const otherLinks: LinkItem[] = [
  {
    label: "📄 CV (ENG) 🇺🇸",
    href: "/resume.pdf",
    external: false,
  },
  {
    label: "📄 CV (PT) 🇧🇷",
    href: "/resume.pdf",
    external: false,
  },
  // {
  //   label: "🔥 NSFW 🔥",
  //   href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   external: true,
  // },
];
