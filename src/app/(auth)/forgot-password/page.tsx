import type { Metadata } from "next";
import { AuthLayout, ForgotPasswordForm } from "@/modules/authentication";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Request a password reset link.",
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Reset your password"
      description="We will send a secure recovery link to your email."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
