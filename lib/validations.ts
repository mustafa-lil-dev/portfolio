import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(200, "Email is too long"),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message is too long"),
  // Honeypot field - should always be empty, catches basic bots
  company: z.string().max(0, "Bot detected").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
