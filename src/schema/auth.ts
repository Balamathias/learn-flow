import { z } from "zod"

export const signInSchema = z.object({
    email: z.string(),
    password: z.string().min(6, { message: "Password must exceed six characters." }),
    remember: z.boolean().optional()
})

export const signUpSchema = z.object({
    email: z.string({ message: "Email field is required."}),
    username: z.string().min(4, { message: 'Username must exceed 4 characters.' }),
    password: z.string().min(6, { message: "Password must exceed six characters." }),
    confirm_password: z.string().min(6, { message: "Password must exceed six characters." })
})