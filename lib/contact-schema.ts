import * as z from "zod";
import { services } from "@/content/services";

const serviceSlugs = services.map((service) => service.slug) as [string, ...string[]];

export const budgetOptions = ["<$5k", "$5k-15k", "$15k-50k", "$50k+"] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  email: z.email("Enter a valid work email."),
  company: z.string().optional(),
  budget: z.enum(budgetOptions, "Select a budget range."),
  projectType: z.enum(serviceSlugs, "Select a project type."),
  message: z
    .string()
    .min(20, "Give us a bit more detail, at least 20 characters."),
  // Honeypot: real visitors never see or fill this field.
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const projectTypeOptions = services.map((service) => ({
  value: service.slug,
  label: service.navTitle,
}));
