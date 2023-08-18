import { useLoaderData } from 'react-router-dom'
import requestWithZod from '../../api/request'
import { Contacts, ContactsSchema } from './ContactsSchema'
import * as S from './styles'

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
            <S.Contact key={contact.name} to={`contact/${index}`}>
              {contact.name}
            </S.Contact>
          )
        })}
      </S.Contacts>
    </S.Container>
  )
}

export const getContacts = async () => {
  const { data } = await requestWithZod<Contacts>(
    `https://swapi.dev/api/people/?page=1`,
    ContactsSchema
  )

  return data
}
