import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    margin: auto;
    height: 100vh;
    width: 80%;

    @media screen and (min-width: ${theme.screens.sm}) {
      width: 60%;
    }

    @media screen and (min-width: ${theme.screens.md}) {
      width: 50%;
    }

    @media screen and (min-width: ${theme.screens.lg}) {
      width: 30%;
    }
  `}
`

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 15%;
  padding-bottom: 15%;
`

export const Logo = styled.div`
  ${({ theme }) => css`
    width: ${theme.size[72]};
  `}
`

export const OutletContainer = styled.div`
  width: 100%;
  flex: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledLink = styled(Link)`
  flex: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`
