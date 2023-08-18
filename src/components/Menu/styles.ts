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
    background-color: black;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 700px) {
      height: ${theme.size[20]};
    }
  `}
`
export const NavbarInnerContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: ${theme.size[20]};
    display: flex;
  `}
`

export const LeftSideContainer = styled.nav`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`
export const NavbarLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes['4xl']};
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: ${theme.size[1]};

    @media screen and (max-width: 700px) {
      display: none;
    }
  `}
`

export const NavbarLinkExtended = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.fonts.sizes['4xl']};
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: ${theme.size[1]};
  `}
`

export const RightSideContainer = styled.nav`
  ${({ theme }) => css`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: ${theme.size[12]};
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

    @media screen and (min-width: 700px) {
      display: none;
    }
  `}
`

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 700px) {
    display: none;
  }
`
