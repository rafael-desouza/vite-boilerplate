import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import ResetStyles from './styles/reset.ts'
import theme from './styles/theme.ts'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
