import { useLoaderData } from 'react-router-dom'

import * as S from './styles'

import requestWithZod from '../../api/request'
import { Contacts, ContactsSchema } from './ContactsSchema'

export const Home = () => {
  const data = useLoaderData() as Contacts

  return (
    <S.Container>
      <S.Title>Welcome to the Home Page</S.Title>
      <S.Message>This is a simple home page created using React.</S.Message>
      <S.LinkButton to="/counter">
        <>Go to Counter</>
      </S.LinkButton>

      <S.Contacts>
        {data.results.map((contact, index) => {
          return (
            <S.Contact key={contact.name} to={`contact/${index + 1}`}>
              {contact.name}
            </S.Contact>
          )
        })}
      </S.Contacts>
    </S.Container>
  )
}

export const getContacts = async () => {
  const API_URL = import.meta.env.VITE_API_URL

  const { data } = await requestWithZod<Contacts>(
    `${API_URL}/contacts/`,
    ContactsSchema
  )

  return data
}
