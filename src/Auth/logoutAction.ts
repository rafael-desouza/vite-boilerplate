import { redirect } from 'react-router-dom'

import { authProvider } from './AuthProvider'

export async function logoutAction() {
  authProvider.logout()

  return redirect('/')
}
