import { z } from "zod";

export const createBusinessUser = z.object({
  email: z.string().email(),
  businessName: z
    .string()
    .min(5, { message: "Business name must be at least 5 characters long" }),
  description: z
    .string()
    .max(200, { message: "Description must be at most 200 characters long" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters long" })
    .refine((password) => /[A-Z]/.test(password), {
      error: "Add atleast one uppercase",
    })
    .refine((passowrd) => /[0-9]/.test(passowrd), {
      error: "Add atleast one number",
    })
    .refine((password) => /[^a-zA-Z0-9]/.test(password), {
      error: "Must include at least one special character",
    }),
});




