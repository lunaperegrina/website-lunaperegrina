import type { Metadata, Site, Socials } from "@types";
import cvData from "./data/cv-data.json";

export const SITE: Site = {
  NAME: cvData.PROFILE.NAME,
  EMAIL: cvData.PROFILE.EMAIL,
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Lunar is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = Array.from(Object.entries(cvData.PROFILE.SOCIALS)).map(([key, value]) => ({
  NAME: key.toLowerCase(),
  HREF: value
}));

export const CV_DATA = cvData;
