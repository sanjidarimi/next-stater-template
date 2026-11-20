import type { Metadata } from "next";
import { AuthLayout, LoginForm } from "@/modules/authentication";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account.",
};

export default function LoginPage() {
  return (
    <AuthLayout title="Welcome back" description="Enter your credentials to access your account.">
      <LoginForm />
    </AuthLayout>
  );
}
