import { z } from "zod";

export const demoFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["developer", "designer", "architect", "manager"], {
    errorMap: () => ({ message: "Please select a valid role" }),
  }),
  notifications: z.boolean().default(false),
  feedback: z
    .string()
    .min(10, "Feedback must be at least 10 characters")
    .max(500, "Feedback cannot exceed 500 characters"),
});

export type DemoFormValues = z.infer<typeof demoFormSchema>;
