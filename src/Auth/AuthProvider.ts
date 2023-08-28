import { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

import { api, axiosRequest } from '../services/api'
import { Login, LoginSchema } from './AuthSchema'

interface AuthProviderInterface {
  token: string | null
  username: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

export class AuthProvider implements AuthProviderInterface {
  token: string | null = Cookies.get('token') || null
  username: string | null = Cookies.get('username') || null

  get isAuthenticated(): boolean {
    if (!this.token) return false

    this.setAuthHeader()
    return true
  }

  async login(email: string, password: string) {
    const config: AxiosRequestConfig = {
      data: {
        email,
        password
      },
      method: 'POST'
    }

    try {
      const response = await axiosRequest<Login, typeof LoginSchema>(
        '/auth/signin',
        LoginSchema,
        config
      )

      if (!response.data) throw new Error('Invalid Credentials')

      this.token = response.data.token
      this.username = response.data.username

      this.setAuthHeader()

      Cookies.set('token', this.token, { expires: 7, secure: true })
      Cookies.set('username', this.username, { expires: 7 })
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  async signup(
    username: string,
    email: string,
    password: string,
    passwordConfirmation: string
  ) {
    const config: AxiosRequestConfig = {
      data: {
        username,
        email,
        password,
        passwordConfirmation
      },
      method: 'POST'
    }

    try {
      const response = await axiosRequest<Login, typeof LoginSchema>(
        '/auth/signup',
        LoginSchema,
        config
      )

      if (!response.data) throw new Error('Invalid Credentials')

      this.token = response.data.token
      this.username = response.data.username

      this.setAuthHeader()

      Cookies.set('token', this.token, { expires: 7, secure: true })
      Cookies.set('username', this.username, { expires: 7 })
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  logout() {
    this.token = null
    this.username = null

    Cookies.remove('token')
    Cookies.remove('username')

    api.defaults.headers.common['Authorization'] = undefined
  }

  getUserName() {
    return this.username
  }

  setAuthHeader() {
    api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
  }
}

export const authProvider = new AuthProvider()
