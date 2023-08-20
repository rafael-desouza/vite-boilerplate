import { LoaderFunctionArgs, redirect } from 'react-router-dom'

import { AuthProvider, authProvider } from './AuthProvider'

export function protectedLoader({ request }: LoaderFunctionArgs) {
  const authProvider = new AuthProvider()

  if (!authProvider.isAuthenticated) {
    const params = new URLSearchParams()
    params.set('from', new URL(request.url).pathname)
    return redirect('/login?' + params.toString())
  }

  return null
}

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

export async function logoutAction() {
  authProvider.logout()

  return redirect('/')
}

export async function getUserDataAction() {}
