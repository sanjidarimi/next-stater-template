import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-8 md:h-16 md:flex-row">
        <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
          Built with Next.js, Tailwind CSS v4, shadcn/ui & Redux Toolkit.
        </p>
        <p className="text-muted-foreground text-center text-xs md:text-right">
          {siteConfig.name} &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
