import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { BsPersonCircle } from 'react-icons/bs'

import theme from '../../styles/theme'
import * as S from './styles'

import { authProvider } from '../../Auth/AuthProvider'
import { MenuToggle } from '../MenuToogle'
import {
  mobileNavbar,
  desktopNavbar,
  desktopLinkContainer,
  desktopLinks,
  mobileLinksContainer,
  mobileLinks,
  hoverLinks
} from './animations'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)

  const username = authProvider.getUserName()

  const isMobile = useMediaQuery({ query: `(max-width: ${theme.screens.sm})` })

  const sidebarVariants = isMobile ? mobileNavbar : desktopNavbar
  const linkContainerVariants = isMobile
    ? mobileLinksContainer
    : desktopLinkContainer
  const linkVariants = isMobile ? mobileLinks : desktopLinks

  const handOpening = () => {
    setIsOpen(!isOpen)
  }

  const handAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu)
  }

  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, isMobile])

  interface AccountDetailsProps {
    username: string
    onClick: () => void
  }

  const LoggedPerson = ({ username, onClick }: AccountDetailsProps) => {
    return (
      <S.AccountDetails onClick={onClick}>
        <S.AccountAvatar>
          <BsPersonCircle />
        </S.AccountAvatar>
        <S.AccountUser>{username}</S.AccountUser>
      </S.AccountDetails>
    )
  }

  return (
    <S.Container initial={false} animate={isOpen ? 'open' : 'closed'}>
      <S.Topbar>
        <S.TopbarLeftContainer>
          <MenuToggle onClick={handOpening} />
        </S.TopbarLeftContainer>
        <S.TopbarMiddleContainer>
          <S.Logo>Logo </S.Logo>
        </S.TopbarMiddleContainer>

        <S.TopbarRightContainer>
          {username ? (
            <LoggedPerson username={username} onClick={handAccountMenu} />
          ) : (
            <LoggedPerson username={'Conta'} onClick={handAccountMenu} />
          )}
          {showAccountMenu && (
            <S.AccountMenu>
              {!username && (
                <S.AccountMenuItem
                  to="/login"
                  focus="emphasis"
                  onClick={handAccountMenu}
                >
                  Login
                </S.AccountMenuItem>
              )}
              {username && (
                <S.AccountMenuItem to="/configs" onClick={handAccountMenu}>
                  Configurações
                </S.AccountMenuItem>
              )}
              {!username && (
                <S.AccountMenuItem
                  to="/create-account"
                  onClick={handAccountMenu}
                >
                  Criar Conta
                </S.AccountMenuItem>
              )}
              {username && (
                <S.AccountMenuItem
                  to="/logout"
                  focus="secondary"
                  onClick={handAccountMenu}
                >
                  Logout
                </S.AccountMenuItem>
              )}
            </S.AccountMenu>
          )}
        </S.TopbarRightContainer>
      </S.Topbar>

      <S.NavbarMenu
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
      >
        <S.NavbarLinkContainer variants={linkContainerVariants} initial={false}>
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
      </S.NavbarMenu>
    </S.Container>
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
