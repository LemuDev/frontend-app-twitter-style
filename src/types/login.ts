import {z} from 'zod'
import { LoginSchema } from '../schemas/login'

export type LoginSchemaType = z.infer<typeof LoginSchema>

