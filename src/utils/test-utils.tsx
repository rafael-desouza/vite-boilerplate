import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const renderWithTheme = (
  children: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { renderWithTheme as render }
