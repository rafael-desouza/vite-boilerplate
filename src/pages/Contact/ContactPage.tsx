/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from 'react-router-dom'

import { axiosRequest } from '../../services/api'
import { Contact, ContactSchema } from './ContactSchema'

export const ContactPage = () => {
  const data = useLoaderData() as Contact

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.height}</h2>
      <p>{data.skin_color}</p>
      <p>{data.hair_color}</p>
    </div>
  )
}

export const contactLoader = async ({ params }: any) => {
  try {
    const response = await axiosRequest<Contact, typeof ContactSchema>(
      `/contacts/${params.contactId}`,
      ContactSchema
    )

    return response.data
  } catch (error) {
    return error
  }
}
