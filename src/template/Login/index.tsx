import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { useAuth } from '../../contexts/AuthState'

export const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(username, password)

      return navigate('/')
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
