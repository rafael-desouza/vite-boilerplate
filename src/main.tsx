import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import ResetStyles from './styles/reset.ts'
import theme from './styles/theme.ts'

import App from './App.tsx'
import { AuthProvider } from './contexts/AuthState.tsx'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ResetStyles />
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
