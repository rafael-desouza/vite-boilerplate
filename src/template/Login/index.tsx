import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import * as S from './styles'

import { loginMock } from '../../__mocks__/authService'
import AuthService from '../../services/authService'

export const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response =
        process.env.NODE_ENV === 'development'
          ? await loginMock(username, password)
          : await AuthService.login(username, password)
      console.log('Token JWT:', response.token)

      return <Navigate to="/" />
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  return (
    <S.Form onSubmit={handleLogin}>
      <S.Input
        type="text"
        placeholder="Usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <S.Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.Button type="submit">Entrar</S.Button>
    </S.Form>
  )
}
