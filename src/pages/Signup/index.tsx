import { useState } from 'react'
import { useActionData, useLocation, useNavigation } from 'react-router-dom'

import * as S from './styles'

export const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const from = params.get('from') || '/'

  const navigation = useNavigation()
  const isLoggingIn = navigation.formData?.get('email') != null

  const actionData = useActionData() as { error: string } | undefined

  return (
    <S.Container>
      <S.Title>Cadastrar-se</S.Title>
      <S.StyledForm method="POST">
        <input type="hidden" name="redirectTo" value={from} />
        <S.Input
          autoComplete="off"
          name="username"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <S.Input
          autoComplete="off"
          name="passwordConfirmation"
          type="password"
          placeholder="Confirme sua senha"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <S.Button type="submit">
          {isLoggingIn ? 'Criando...' : 'Criar conta'}
        </S.Button>
        {actionData && actionData.error ? (
          <p style={{ color: 'red' }}>{actionData.error}</p>
        ) : null}
      </S.StyledForm>

      <S.Footer>
        <S.Span>
          Já tem uma conta?
          <S.FooterText to="/auth/login">Login</S.FooterText>
        </S.Span>
      </S.Footer>
    </S.Container>
  )
}
