import { Link } from 'react-router-dom'
import { css, styled } from 'styled-components'

const shouldForwardProp = (prop: string) => !['extendNavBar'].includes(prop)

type Props = {
  extendNavBar: boolean
}

/**
 * By default when you pass a non-standard prop to a styled component, the prop will also be passed down to DOM element
 * shouldForwardProp: With this feature, you can specify which props should be forwarded to the DOM.
 */

export const NavbarContainer = styled.nav.withConfig({
  shouldForwardProp
})<Props>`
  ${({ theme, extendNavBar }) => css`
    width: 100%;
    height: ${extendNavBar ? '100vh' : '80px'};
    display: grid;
    grid-template-rows: 80px calc(100vh - 80px);
    grid-template-columns: 50% 50%;
    background-color: black;

    transition: 0.5s height ease-in-out;

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

export const MiddleContainer = styled.nav.withConfig({
  shouldForwardProp
})<Props>`
  ${({ theme, extendNavBar }) => css`
    grid-row: 2/ 3;
    grid-column: 1 / 3;
    display: flex;
    max-height: ${extendNavBar ? '100%' : '0'};
    opacity: ${extendNavBar ? '1' : '0'};
    transform: ${extendNavBar ? 'translateY(0%)' : 'translateY(-100%)'};
    overflow: hidden;

    transition:
      max-height 0.5s ease-in-out,
      opacity 0.5s ease-in-out,
      transform 0.5s ease-in-out;

    @media screen and (min-width: ${theme.screens.sm}) {
      max-height: 100%;
      opacity: 1;
      transform: translateY(0);
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
  `}
`

export const RightSideContainer = styled.nav`
  ${({ theme }) => css`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const NavbarLinkContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (min-width: ${theme.screens.sm}) {
      flex-direction: row;
      justify-content: flex-start;
    }
  `}
`

export const NavbarLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
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

export const OpenLinksButton = styled.button`
  ${({ theme }) => css`
    width: ${theme.size[16]};
    height: ${theme.size[14]};
    background: none;
    border: none;
    color: white;
    font-size: ${theme.fonts.sizes['5xl']};
    cursor: pointer;
    display: block;
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
