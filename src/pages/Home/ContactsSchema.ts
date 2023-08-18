import { z } from 'zod'

import { ContactSchema } from '../Contact/ContactSchema'

export const ContactsSchema = z.object({
  results: z.array(ContactSchema)
})

export type Contacts = z.infer<typeof ContactsSchema>
