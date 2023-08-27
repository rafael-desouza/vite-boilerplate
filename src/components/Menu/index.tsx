import { useEffect, useState } from 'react'

import * as S from './styles'

import { MenuToggle } from '../MenuToogle'
import theme from '../../styles/theme'
import { useMediaQuery } from 'react-responsive'
import { Variants, motion } from 'framer-motion'
import {
  mobileNavbar,
  desktopNavbar,
  desktopLinkContainer,
  desktopLinks,
  mobileLinksContainer,
  mobileLinks,
  hoverLinks
} from './animations'

interface LinksProps {
  handOpening: () => void
  elements: { name: string; to: string }[]
}

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

  const sidebarVariants = isMobile ? mobileNavbar : desktopNavbar
  const linkContainerVariants = isMobile
    ? mobileLinksContainer
    : desktopLinkContainer
  const linkVariants = isMobile ? mobileLinks : desktopLinks

  const handOpening = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, isMobile])

  return (
    <S.NavbarContainer
      isOpen={isOpen}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
    >
      <S.LeftSideContainer>
        <MenuToggle onClick={handOpening} />
      </S.LeftSideContainer>
      <S.MiddleContainer isOpen={isOpen}>
        <S.NavbarLinkContainer
          variants={linkContainerVariants}
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
        >
          {routeLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ color: theme.colors.white }}
              variants={linkVariants}
              whileHover={hoverLinks}
            >
              <S.NavbarLink key={index} to={link.to} onClick={handOpening}>
                {link.name}
              </S.NavbarLink>
            </motion.div>
          ))}
        </S.NavbarLinkContainer>
      </S.MiddleContainer>
      <S.RightSideContainer>
        <S.Logo>Logo</S.Logo>
      </S.RightSideContainer>
    </S.NavbarContainer>
  )
}

const routeLinks = [
  { name: 'Home', to: '/' },
  { name: 'Counter', to: '/admin/counter' },
  { name: 'Home', to: '/' },
  { name: 'Counter', to: '/admin/counter' },
  { name: 'Home', to: '/' },
  { name: 'Counter', to: '/admin/counter' }
]
