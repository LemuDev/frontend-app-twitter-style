import {z} from 'zod'
import { registerSchema } from '../schemas/register'

export type RegisterSchemaType = z.infer<typeof registerSchema>

