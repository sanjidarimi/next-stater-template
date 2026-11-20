import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Secure account access and identity management.",
};

export default function AuthAppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
