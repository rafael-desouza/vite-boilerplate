import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { css, styled } from 'styled-components'

const shouldForwardProp = (prop: string) => !['isOpen'].includes(prop)

type Props = {
  isOpen: boolean
}

/**
 * By default when you pass a non-standard prop to a styled component, the prop will also be passed down to DOM element
 * shouldForwardProp: With this feature, you can specify which props should be forwarded to the DOM.
 */

export const NavbarContainer = styled(motion.nav).withConfig({
  shouldForwardProp
})<Props>`
  ${({ theme, isOpen }) => css`
    width: 100%;
    padding: 0 ${theme.size[5]};
    height: ${isOpen ? '100vh' : '80px'};
    display: grid;
    grid-template-rows: 80px calc(100vh - 80px);
    grid-template-columns: 50% 50%;
    background-color: black;
    overflow: hidden;

    @media screen and (min-width: ${theme.screens.sm}) {
      grid-template-columns: 70% 30%;
      height: ${theme.size[20]};
    }
  `}
`

export const LeftSideContainer = styled.nav`
  ${({ theme }) => css`
    display: flex;

    @media screen and (min-width: ${theme.screens.sm}) {
      display: none;
    }
  `}
`

export const MiddleContainer = styled(motion.div).withConfig({
  shouldForwardProp
})<Props>`
  ${({ theme }) => css`
    grid-row: 2/ 3;
    grid-column: 1 / 3;
    display: flex;

    @media screen and (min-width: ${theme.screens.sm}) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
  `}
`

export const RightSideContainer = styled.nav`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NavbarLinkContainer = styled(motion.div)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (min-width: ${theme.screens.sm}) {
      flex-direction: row;
      justify-content: space-between;
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

    @media screen and (min-width: ${theme.screens.lg}) {
      font-size: ${theme.fonts.sizes['3xl']};
    }

    @media screen and (min-width: ${theme.screens.xl}) {
      font-size: ${theme.fonts.sizes['4xl']};
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
  `}
`
