import axios from 'axios'
import Cookies from 'js-cookie'

interface AuthProviderInterface {
  token: string | null
  user: string | null
  role: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

export class AuthProvider implements AuthProviderInterface {
  token: string | null = Cookies.get('token') || null
  user: string | null = Cookies.get('user') || null
  role: string | null = Cookies.get('role') || null

  get isAuthenticated(): boolean {
    return !!this.token
  }

  async login(email: string, password: string) {
    const API_URL = import.meta.env.VITE_API_URL

    try {
      const response = await axios.post<{
        token: string
        user: string
        role: string
      }>(`${API_URL}/auth/signin`, {
        email,
        password
      })

      this.token = response.data.token
      this.user = response.data.user
      this.role = response.data.role
      Cookies.set('token', this.token, { expires: 7 })
      Cookies.set('user', this.user, { expires: 7 })
      Cookies.set('role', this.role, { expires: 7 })
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  logout() {
    this.token = null
    this.user = null
    this.role = null

    Cookies.remove('token')
    Cookies.remove('user')
    Cookies.remove('role')
  }
}

export const authProvider = new AuthProvider()
