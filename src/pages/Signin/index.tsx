import { useState } from 'react'
import { useActionData, useLocation, useNavigation } from 'react-router-dom'

import * as S from './styles'

export const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const from = params.get('from') || '/'

  const navigation = useNavigation()
  const isLoggingIn = navigation.formData?.get('email') != null

  const actionData = useActionData() as { error: string } | undefined

  return (
    <S.Container>
      <S.Title>Conectar-se</S.Title>
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

      <S.Footer>
        <S.FooterText to="/auth/create-account">Crie uma conta</S.FooterText>
        <S.FooterText to="/help">Não consegue logar?</S.FooterText>
      </S.Footer>
    </S.Container>
  )
}
