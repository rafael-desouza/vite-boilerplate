import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import * as S from './styles'

export const Menu = () => {
  const [extendNavBar, setExtendNavBar] = useState(false)

  const handleExtendNavBar = () => {
    setExtendNavBar(!extendNavBar)
  }

  useEffect(() => {
    extendNavBar
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [extendNavBar])

  return (
    <S.NavbarContainer extendNavBar={extendNavBar}>
      <S.NavbarInnerContainer>
        <S.LeftSideContainer>
          <S.NavbarLinkContainer>
            <S.NavbarLink to="/"> Home </S.NavbarLink>
            <S.NavbarLink to="/counter"> Counter </S.NavbarLink>
            <S.OpenLinksButton onClick={handleExtendNavBar}>
              {extendNavBar ? <FaTimes /> : <FaBars />}
            </S.OpenLinksButton>
          </S.NavbarLinkContainer>
        </S.LeftSideContainer>
        <S.RightSideContainer>
          <S.Logo>Logo</S.Logo>
        </S.RightSideContainer>
      </S.NavbarInnerContainer>
      {extendNavBar && (
        <S.NavbarExtendedContainer>
          <S.NavbarLinkExtended to="/" onClick={handleExtendNavBar}>
            Home
          </S.NavbarLinkExtended>

          <S.NavbarLinkExtended to="/counter" onClick={handleExtendNavBar}>
            Counter
          </S.NavbarLinkExtended>
        </S.NavbarExtendedContainer>
      )}
    </S.NavbarContainer>
  )
}
