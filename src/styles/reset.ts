import { createGlobalStyle, css } from 'styled-components'

const ResetStyles = createGlobalStyle`
${({ theme }) => css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.light};
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`}
`

export default ResetStyles
