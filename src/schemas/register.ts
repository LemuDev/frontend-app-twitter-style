import { z } from "zod";
 

export const registerSchema = z.object({
    first_name: z.string().max(60).min(1),
    last_name: z.string().max(60).min(1),
    email: z.string().email().max(100).min(1),
    password: z.string().max(100).min(8),
    confirm: z.string().max(100).min(8),
}).refine((data)=> data.password === data.confirm,{
    message: "Password don't match",
    path:["confirm"],
})