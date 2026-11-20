"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { forgotPasswordSchema, type ForgotPasswordFormValues } from "../schemas/auth.schema";
import { useForgotPasswordMutation } from "../services/auth.api";
import { authConfig } from "../config/auth.config";
import { toast } from "sonner";

export function ForgotPasswordForm() {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      await forgotPassword(values).unwrap();
    } catch {
      // Intentionally show generic success message to prevent user enumeration
    } finally {
      setSubmittedEmail(values.email);
      toast.success("Reset link sent", {
        description: "If an account exists, instructions have been emailed.",
      });
    }
  };

  if (submittedEmail) {
    return (
      <Card className="border-muted w-full space-y-4 p-6 text-center shadow-lg">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-xl">Check your inbox</CardTitle>
          <CardDescription className="text-xs">
            We sent instructions to <strong className="text-foreground">{submittedEmail}</strong>.
            Click the link in the email to reset your password.
          </CardDescription>
        </div>
        <div className="pt-2">
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href={authConfig.routes.login}>Return to Sign In</Link>
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="border-muted w-full shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl font-bold">Forgot Password</CardTitle>
        <CardDescription className="text-xs">
          Enter your registered email address and we&apos;ll send you a password reset link.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="alex@example.com"
              autoComplete="email"
              disabled={isLoading}
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" disabled={isLoading} className="w-full gap-2">
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending reset link...</span>
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" />
                <span>Send Reset Link</span>
              </>
            )}
          </Button>

          <Link
            href={authConfig.routes.login}
            className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center gap-1.5 text-xs"
          >
            <ArrowLeft className="h-3 w-3" />
            <span>Back to Sign In</span>
          </Link>
        </CardFooter>
      </form>
    </Card>
  );
}
