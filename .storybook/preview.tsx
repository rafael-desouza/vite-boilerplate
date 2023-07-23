import React from 'react'
import { ThemeProvider } from 'styled-components'

import ResetStyles from '../src/styles/reset'
import theme from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <Story />
    </ThemeProvider>
  )
]
