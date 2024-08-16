import { z } from "zod";

export const addCourseSchema = z.object({
    title: z.string(),
    description: z.string(),
    image: z.any(),
    price: z.number(),
})
