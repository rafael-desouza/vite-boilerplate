import { LoaderFunctionArgs, redirect } from 'react-router-dom'

import { authProvider } from './AuthProvider'

export async function loginAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData()
  const email = formData.get('email') as string | null
  const password = formData.get('password') as string | null

  if (!email) {
    return {
      error: 'You must provide a email to log in'
    }
  }

  if (!password) {
    return {
      error: 'You must provide a password to log in'
    }
  }

  try {
    await authProvider.login(email, password)
  } catch (error) {
    return {
      error: 'Invalid login attempt'
    }
  }

  const redirectTo = formData.get('redirectTo') as string | null
  return redirect(redirectTo || '/')
}
