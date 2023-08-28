import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`
export const OuletContent = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.size[2]};

    @media screen and (min-width: ${theme.screens.md}) {
      margin-top: ${theme.size[8]};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 90%;
    margin: auto;

    @media screen and (min-width: ${theme.screens.sm}) {
      width: 85%;
    }

    @media screen and (min-width: ${theme.screens.md}) {
      width: 82.5%;
    }

    @media screen and (min-width: ${theme.screens.lg}) {
      width: 80%;
    }
  `}
`
