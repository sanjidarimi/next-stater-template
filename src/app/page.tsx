import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SectionHeading } from "@/components/shared/section-heading";
import { DemoForm } from "@/features/demo/components/demo-form";
import { DemoComponents } from "@/features/demo/components/demo-components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Layers, ShieldCheck, Zap, Palette, LayoutDashboard } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: "Next.js App Router",
      description: "Optimized server & client component architecture with TypeScript strict mode.",
    },
    {
      icon: Palette,
      title: "Tailwind CSS v4 & shadcn/ui",
      description: "Pre-configured CSS variables theme, accessible primitives, and dark mode.",
    },
    {
      icon: Layers,
      title: "Redux Toolkit & RTK Query",
      description: "Centralized store, tag invalidation, and endpoint injection support.",
    },
    {
      icon: ShieldCheck,
      title: "React Hook Form & Zod",
      description: "Strict schema-based validation with high-performance accessible form fields.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-8">
          {/* Hero Section */}
          <section className="space-y-4 pt-6 pb-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <Badge variant="outline" className="px-3 py-1 text-xs">
                Production-Ready Template
              </Badge>
              <Badge variant="secondary" className="px-3 py-1 text-xs">
                + Modular Dashboard
              </Badge>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg">
              {siteConfig.description}
            </p>
            <div className="pt-2">
              <Button asChild size="lg" className="gap-2">
                <Link href="/dashboard">
                  <LayoutDashboard className="h-4 w-4" />
                  Explore Reusable Dashboard Module
                </Link>
              </Button>
            </div>
          </section>

          {/* Feature Highlights */}
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card text-card-foreground hover:border-primary/50 rounded-xl border p-5 shadow-sm transition-colors"
              >
                <div className="bg-primary/10 text-primary mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-base font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </section>

          {/* Interactive Starter Demonstration Section */}
          <section className="space-y-6">
            <SectionHeading
              title="Interactive Starter Demonstration"
              description="Explore form validation, Sonner toasts, and theme-responsive components."
            />

            <div className="grid items-start gap-8 lg:grid-cols-2">
              <DemoForm />
              <DemoComponents />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
