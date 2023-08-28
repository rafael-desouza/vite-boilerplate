import { motion } from 'framer-motion'
import { darken, lighten } from 'polished'
import { Link } from 'react-router-dom'
import { css, styled } from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'

const shouldForwardProp = (prop: string) => !['isOpen'].includes(prop)

export const Container = styled(motion.nav)``

export const Topbar = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-bottom: ${theme.size[2]};
  `}
`

export const TopbarLeftContainer = styled.div`
  ${({ theme }) => css`
    flex: 32%;

    @media screen and (min-width: ${theme.screens.sm}) {
      display: none;
    }
  `}
`
export const TopbarMiddleContainer = styled.div`
  ${({ theme }) => css`
    flex: 32%;

    @media screen and (min-width: ${theme.screens.sm}) {
      flex: 50%;
    }
  `}
`
export const TopbarRightContainer = styled.div`
  ${({ theme }) => css`
    flex: 32%;
    position: relative;

    @media screen and (min-width: ${theme.screens.sm}) {
      flex: 50%;
    }
  `}
`
export const Logo = styled.div`
  ${({ theme }) => css`
    width: 120px;

    @media screen and (min-width: ${theme.screens.sm}) {
      justify-content: start;
    }
  `}
`

export const NavbarMenu = styled(motion.nav).withConfig({
  shouldForwardProp
})`
  ${({ theme }) => css`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: ${theme.screens.sm}) {
      justify-content: flex-start;
    }
  `}
`

export const NavbarLinkContainer = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: ${theme.screens.sm}) {
      display: inline-flex;
      flex-direction: row;
      align-items: start;
      justify-content: space-around;
      padding: ${theme.size[5]} ${theme.size[2]};

      min-width: 80%;
      background-color: ${darken(0.05, theme.colors.background)};
      border-radius: ${theme.borderRadius.rounded};
    }
  `}
`

export const NavbarLink = styled(Link)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes['4xl']};
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: ${theme.size[1]};

    @media screen and (min-width: ${theme.screens.sm}) {
      font-size: ${theme.fonts.sizes['2xl']};
    }

    @media screen and (min-width: ${theme.screens.md}) {
      font-size: ${theme.fonts.sizes['2xl']};
    }
  `}
`

export const AccountDetails = styled.div`
  ${({ theme }) => css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.size[2]};
    cursor: pointer;
  `}
`

export const AccountAvatar = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.size[7]};
    color: ${theme.colors.gray[400]};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const AccountUser = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes['2xl']};
    color: ${theme.colors.light};
    font-weight: bold;
  `}
`

export const AccountMenu = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${darken(0.08, theme.colors.background)};
    border-radius: ${theme.borderRadius.xl};

    min-width: ${theme.size[80]};
    padding: ${theme.size[4]};
    right: 0;
    display: flex;
    gap: ${theme.size[3]};
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

interface WrapperProps {
  focus?: 'emphasis' | 'secondary'
}

const wrapperModifiers = {
  emphasis: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.background};
    width: 95%;

    &:hover {
      background-color: ${lighten(0.05, theme.colors.background)};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.gray[700]};
    width: 95%;

    &:hover {
      background-color: ${theme.colors.gray[500]};
    }
  `
}

export const AccountMenuItem = styled(Link)<WrapperProps>`
  ${({ theme, focus }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.xl};
    color: ${theme.colors.light};
    width: 100%;
    font-size: ${theme.fonts.sizes['xl']};
    padding: ${theme.size[4]};

    &:hover {
      background-color: ${theme.colors.background};
    }

    ${!!focus && wrapperModifiers[focus](theme)};
  `}
`
