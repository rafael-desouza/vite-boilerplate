import React, { useEffect, useState } from 'react'
import {
  LoaderFunctionArgs,
  redirect,
  useActionData,
  useLocation,
  useNavigation
} from 'react-router-dom'

import * as S from './styles'
import { AuthProvider } from '../../Auth/AuthProvider'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const from = params.get('from') || '/'

  const navigation = useNavigation()
  const isLoggingIn = navigation.formData?.get('email') != null

  const actionData = useActionData() as { error: string } | undefined

  return (
    <S.StyledForm method="POST">
      <input type="hidden" name="redirectTo" value={from} />
      <S.Input
        autoComplete="off"
        name="email"
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Input
        autoComplete="off"
        name="password"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.Button type="submit">
        {isLoggingIn ? 'Logging in...' : 'Login'}
      </S.Button>
      {actionData && actionData.error ? (
        <p style={{ color: 'red' }}>{actionData.error}</p>
      ) : null}
    </S.StyledForm>
  )
}
