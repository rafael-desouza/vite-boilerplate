import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '../../contexts/AuthState'

export const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth()

  const auth = isAuthenticated

  return auth ? <Outlet /> : <Navigate to="/login" />
}
