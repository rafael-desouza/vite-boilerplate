import { LoaderFunctionArgs, redirect } from 'react-router-dom'

import { USER_ROLES } from '../helpers/types'
import { axiosRequest } from '../services/api'
import { authProvider } from './AuthProvider'
import { Role, RoleSchema } from './AuthSchema'

export interface RoleProtectLoader extends LoaderFunctionArgs {
  requestedRole: USER_ROLES
}

export async function protectedLoader({
  request,
  requestedRole
}: RoleProtectLoader) {
  if (!authProvider.isAuthenticated) {
    const params = new URLSearchParams()
    params.set('from', new URL(request.url).pathname)
    return redirect('/login?' + params.toString())
  }

  try {
    const response = await axiosRequest<Role, typeof RoleSchema>('/auth/role')

    const { role: userRole } = response.data

    if (userRole !== requestedRole) return redirect('/')

    return null
  } catch (e) {
    return redirect('/')
  }
}
