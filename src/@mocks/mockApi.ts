import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

if (process.env.NODE_ENV === 'development') {
  const mock = new MockAdapter(axios)
  const API_URL = import.meta.env.VITE_API_URL

  mock.onGet(`${API_URL}/contacts/`).reply(200, {
    count: 82,
    previous: null,
    results: [
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male'
      },
      {
        name: 'C-3PO',
        height: '167',
        mass: '75',
        hair_color: 'n/a',
        skin_color: 'gold',
        eye_color: 'yellow',
        birth_year: '112BBY',
        gender: 'n/a'
      }
    ]
  })

  mock.onGet(`${API_URL}/contacts/1`).reply(200, {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male'
  })

  mock.onGet(`${API_URL}/contacts/2`).reply(200, {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a'
  })

  mock.onPost(`${API_URL}/auth/signin`).reply((config) => {
    const { email, password } = JSON.parse(config.data as string)

    if (email === 'test@example.com' && password === '123456') {
      return [
        200,
        {
          status: 'success',
          token: 'fake-jwt-token',
          user: 'Rafael',
          role: 'Admin'
        }
      ]
    }

    return [
      401,
      {
        status: 'error',
        message: 'Invalid email or password'
      }
    ]
  })
}
