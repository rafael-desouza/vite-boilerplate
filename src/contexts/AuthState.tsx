import axios from 'axios'
import Cookies from 'js-cookie'
import React, { createContext, useContext, useState } from 'react'

interface AuthContextData {
  token: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextData>({
  token: null,
  login: async () => {},
  logout: () => {},
  isAuthenticated: false
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    Cookies.get('token') || null
  )

  const API_URL = 'testApi'

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password
      })
      const { token } = response.data
      Cookies.set('token', token, { expires: 7 })
      setToken(token)
    } catch (error) {
      throw new Error('something went wrong')
    }
  }

  const logout = () => {
    setToken(null)
  }

  const isAuthenticated = !!token

  return (
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
