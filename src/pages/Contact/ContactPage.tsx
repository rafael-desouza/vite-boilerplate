/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from 'react-router-dom'

import requestWithZod from '../../api/request'
import { Contact, ContactSchema } from './ContactSchema'

export const ContactPage = () => {
  const data = useLoaderData() as Contact

  return (
    <div>
      <h1>{data?.name}</h1>
      <h2>{data?.height}</h2>
      <p>{data?.skin_color}</p>
      <p>{data?.skin_color}</p>
    </div>
  )
}

export const contactLoader = async ({ params }: any) => {
  const { data } = await requestWithZod<Contact>(
    `https://swapi.dev/api/people/${params.contactId}`,
    ContactSchema
  )

  return data
}
