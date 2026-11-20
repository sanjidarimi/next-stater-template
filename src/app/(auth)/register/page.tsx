import type { Metadata } from "next";
import { AuthLayout, RegisterForm } from "@/modules/authentication";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Register a new account.",
};

export default function RegisterPage() {
  return (
    <AuthLayout title="Get started" description="Create a new account to access platform features.">
      <RegisterForm />
    </AuthLayout>
  );
}
