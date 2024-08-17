import { z } from "zod";

export const addCourseSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.any(),
    price: z.number(),
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
