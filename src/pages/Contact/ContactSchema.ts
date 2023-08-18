import { z } from 'zod'

export const ContactSchema = z.object({
  name: z.string(),
  height: z.string().transform((height) => Number(height)),
  hair_color: z.string(),
  skin_color: z.string()
})

export type Contact = z.output<typeof ContactSchema>
