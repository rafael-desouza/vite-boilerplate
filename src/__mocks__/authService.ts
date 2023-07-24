import Cookies from 'js-cookie'

export const loginMock = async (username: string, password: string) => {
  return new Promise<{ token: string }>((resolve, reject) => {
    setTimeout(() => {
      if (username === 'test' && password === 'test') {
        const token = 'your-mock-jwt-token'

        Cookies.set('token', token, { expires: 7 })
        resolve({ token })
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 1000)
  })
}
