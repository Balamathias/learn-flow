import { z } from "zod";

export const addCourseSchema = z.object({
    title: z.string().min(1, {message: "Title must be up to at least a character"}),
    description: z.string().min(2),
    image: z.any(),
    price: z.string().min(1),
})

export const updateProfileSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    nickname: z.string(),

    current_password: z.string().optional(),

    account_email: z.string().optional(),
    new_password: z.string().optional(),
    confirm_password: z.string().optional(),
})
