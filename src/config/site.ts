export const siteConfig = {
  name: "Next.js Core Starter",
  description:
    "A production-ready, scalable Next.js starter template equipped with Tailwind CSS v4, shadcn/ui, Redux Toolkit, and React Hook Form.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/images/og.png",
  links: {
    github: "https://github.com",
    docs: "/docs",
  },
  creator: "Next.js Architect",
};

export type SiteConfig = typeof siteConfig;
