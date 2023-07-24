import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = 'http://seu-servidor-backend.com/api'

interface LoginResponse {
  token: string
}

class AuthService {
  async login(username: string, password: string): Promise<LoginResponse> {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password
    })
    const { token } = response.data
    Cookies.set('token', token, { expires: 7 })

    return response.data
  }

  logout() {
    Cookies.remove('token')
  }
}

export default new AuthService()
