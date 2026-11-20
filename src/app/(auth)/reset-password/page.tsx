import type { Metadata } from "next";
import { Suspense } from "react";
import { AuthLayout, ResetPasswordForm } from "@/modules/authentication";
import { PageLoader } from "@/components/shared/page-loader";

export const metadata: Metadata = {
  title: "New Password",
  description: "Set a new password for your account.",
};

export default function ResetPasswordPage() {
  return (
    <AuthLayout title="Create new password" description="Enter your new credentials below.">
      <Suspense fallback={<PageLoader message="Loading reset form..." />}>
        <ResetPasswordForm />
      </Suspense>
    </AuthLayout>
  );
}
