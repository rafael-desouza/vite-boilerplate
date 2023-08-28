import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { css, styled } from 'styled-components'
import { darken } from 'polished'
import { DefaultTheme } from 'styled-components/dist/types'

const shouldForwardProp = (prop: string) => !['isOpen'].includes(prop)

export const Container = styled(motion.nav)`
  ${({ theme }) => css`
    width: 100%;
    padding: calc(${theme.grid.gutter} / 4) calc(${theme.grid.gutter} / 2);
    background-color: ${theme.colors.emerald[900]};
  `}
`

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
    font-size: ${theme.fonts.sizes['4xl']};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};

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
      max-height: 100%;
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
      justify-content: flex-start;
      gap: ${theme.size['12']};
      padding: ${theme.size['2']} ${theme.size['8']};
      background-color: ${darken(0.02, theme.colors.emerald[900])};
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
      font-size: ${theme.fonts.sizes.xl};
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
    font-size: ${theme.size[6]};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const AccountUser = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.xl};
    font-weight: bold;
  `}
`

export const AccountMenu = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-color: ${darken(0.08, theme.colors.emerald[900])};
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
    background-color: ${theme.colors.blue[800]};
    width: 95%;

    &:hover {
      background-color: ${theme.colors.blue[700]};
    }
  `,
  secondary: (theme: DefaultTheme) => css``
}

export const AccountMenuItem = styled(Link)<WrapperProps>`
  ${({ theme, focus }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.xl};
    color: ${theme.colors.white};
    width: 100%;
    font-size: ${theme.fonts.sizes['xl']};
    padding: ${theme.size[4]};

    &:hover {
      background-color: ${theme.colors.emerald[900]};
    }

    ${!!focus && wrapperModifiers[focus](theme)};
  `}
`
