"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { demoFormSchema, type DemoFormValues } from "../schemas/demo-form.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Send, CheckCircle2 } from "lucide-react";

export function DemoForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      role: "developer",
      notifications: true,
      feedback: "",
    },
  });

  const notifications = watch("notifications");
  const selectedRole = watch("role");

  const onSubmit = async (data: DemoFormValues) => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    toast.success("Form submitted successfully!", {
      description: `Welcome aboard, ${data.fullName}! Email: ${data.email}`,
      icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />,
    });

    reset();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Interactive Form Validation</CardTitle>
        <CardDescription>
          Type-safe form powered by React Hook Form & Zod schema validation.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Ada Lovelace"
              {...register("fullName")}
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && (
              <p className="text-destructive text-xs">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="ada@example.com"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
          </div>

          {/* Role Select */}
          <div className="space-y-1.5">
            <Label htmlFor="role">Role</Label>
            <Select
              value={selectedRole}
              onValueChange={(val) =>
                setValue("role", val as DemoFormValues["role"], {
                  shouldValidate: true,
                })
              }
            >
              <SelectTrigger id="role">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">Full-Stack Developer</SelectItem>
                <SelectItem value="designer">UI/UX Designer</SelectItem>
                <SelectItem value="architect">Software Architect</SelectItem>
                <SelectItem value="manager">Engineering Manager</SelectItem>
              </SelectContent>
            </Select>
            {errors.role && <p className="text-destructive text-xs">{errors.role.message}</p>}
          </div>

          {/* Feedback Textarea */}
          <div className="space-y-1.5">
            <Label htmlFor="feedback">Feedback / Project Idea</Label>
            <Textarea
              id="feedback"
              placeholder="Describe your Next.js project requirements..."
              rows={3}
              {...register("feedback")}
              aria-invalid={!!errors.feedback}
            />
            {errors.feedback && (
              <p className="text-destructive text-xs">{errors.feedback.message}</p>
            )}
          </div>

          {/* Notification Switch */}
          <div className="flex items-center justify-between rounded-lg border p-3">
            <div className="space-y-0.5">
              <Label htmlFor="notifications" className="text-sm font-medium">
                Email Notifications
              </Label>
              <p className="text-muted-foreground text-xs">Receive build and release alerts.</p>
            </div>
            <Switch
              id="notifications"
              checked={notifications}
              onCheckedChange={(checked) => setValue("notifications", checked)}
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" disabled={isSubmitting} className="w-full gap-2">
            <Send className="h-4 w-4" />
            {isSubmitting ? "Validating & Submitting..." : "Submit Form"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
