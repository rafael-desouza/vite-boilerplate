import { LoaderFunctionArgs, redirect } from 'react-router-dom'

import { authProvider } from './AuthProvider'

export async function signupAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData()
  const email = formData.get('email') as string | null
  const password = formData.get('password') as string | null
  const username = formData.get('username') as string | null
  const passwordConfirmation = formData.get('passwordConfirmation') as
    | string
    | null

  if (!username) {
    return {
      error: 'You must provide a username to log in'
    }
  }

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

  if (!passwordConfirmation) {
    return {
      error: 'You must provide a passwordConfirmation to log in'
    }
  }

  try {
    await authProvider.signup(username, email, password, passwordConfirmation)
  } catch (error) {
    return {
      error: 'Invalid login attempt'
    }
  }

  return redirect('/')
}
