import { z } from 'zod'

import { USER_ROLES } from '../helpers/types'

export const LoginSchema = z.object({
  token: z.string(),
  username: z.string()
})

export type Login = z.infer<typeof LoginSchema>

export const RoleSchema = z.object({
  role: z.enum([USER_ROLES.ADMIN, USER_ROLES.USER])
})

export type Role = z.infer<typeof RoleSchema>
