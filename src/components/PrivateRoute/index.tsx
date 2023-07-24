import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'

const isAuthenticated = (): boolean => {
  return !!Cookies.get('token')
}

export const PrivateRoute = () => {
  const auth = isAuthenticated()

  return auth ? <Outlet /> : <Navigate to="/login" />
}
