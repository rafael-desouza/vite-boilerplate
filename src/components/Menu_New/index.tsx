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
      <S.LeftSideContainer>
        <S.OpenLinksButton onClick={handleExtendNavBar}>
          {extendNavBar ? <FaTimes /> : <FaBars />}
        </S.OpenLinksButton>
      </S.LeftSideContainer>
      <S.MiddleContainer extendNavBar={extendNavBar}>
        <S.NavbarLinkContainer>
          <S.NavbarLink to="/" onClick={handleExtendNavBar}>
            Home
          </S.NavbarLink>
          <S.NavbarLink to="/admin/counter" onClick={handleExtendNavBar}>
            Counter
          </S.NavbarLink>
          <S.NavbarLink to="/" onClick={handleExtendNavBar}>
            Home
          </S.NavbarLink>
          <S.NavbarLink to="/admin/counter" onClick={handleExtendNavBar}>
            Counter
          </S.NavbarLink>
          <S.NavbarLink to="/" onClick={handleExtendNavBar}>
            Home
          </S.NavbarLink>
          <S.NavbarLink to="/admin/counter" onClick={handleExtendNavBar}>
            Counter
          </S.NavbarLink>
        </S.NavbarLinkContainer>
      </S.MiddleContainer>
      <S.RightSideContainer>
        <S.Logo>Logo</S.Logo>{' '}
      </S.RightSideContainer>
    </S.NavbarContainer>
  )
}
