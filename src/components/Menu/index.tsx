import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

import theme from '../../styles/theme'
import * as S from './styles'

import Logo from '../../assets/svg-logo-h.svg'
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

interface AccountMenuOptionsProps {
  handleAccountMenu: () => void
}
const WithUserMenuOptions = ({
  handleAccountMenu
}: AccountMenuOptionsProps) => {
  return (
    <>
      <S.AccountMenuItem to="/configs" onClick={handleAccountMenu}>
        Configurações
      </S.AccountMenuItem>
      <S.AccountMenuItem
        to="/auth/logout"
        focus="secondary"
        onClick={handleAccountMenu}
      >
        Logout
      </S.AccountMenuItem>
    </>
  )
}

const WihtoutUserMenuOptions = ({
  handleAccountMenu
}: AccountMenuOptionsProps) => {
  return (
    <>
      <S.AccountMenuItem
        to="/auth/login"
        focus="emphasis"
        onClick={handleAccountMenu}
      >
        Login
      </S.AccountMenuItem>
      <S.AccountMenuItem to="/auth/create-account" onClick={handleAccountMenu}>
        Criar Conta
      </S.AccountMenuItem>
    </>
  )
}

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const username = authProvider.getUserName()
  const isMobile = useMediaQuery({ query: `(max-width: ${theme.screens.sm})` })
  const accountMenuRef = useRef<HTMLDivElement>(null)

  const sidebarVariants = isMobile ? mobileNavbar : desktopNavbar
  const linkContainerVariants = isMobile
    ? mobileLinksContainer
    : desktopLinkContainer
  const linkVariants = isMobile ? mobileLinks : desktopLinks

  const handOpening = () => {
    setIsOpen(!isOpen)
  }

  const handleAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        accountMenuRef.current &&
        !accountMenuRef.current.contains(event.target as Node)
      ) {
        setShowAccountMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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
          <Link to="/">
            <S.Logo>
              <img src={Logo} alt="a" />
            </S.Logo>
          </Link>
        </S.TopbarMiddleContainer>

        <S.TopbarRightContainer>
          {username ? (
            <LoggedPerson username={username} onClick={handleAccountMenu} />
          ) : (
            <LoggedPerson username={'Conta'} onClick={handleAccountMenu} />
          )}
          {showAccountMenu && (
            <S.AccountMenu ref={accountMenuRef}>
              {username ? (
                <WithUserMenuOptions handleAccountMenu={handleAccountMenu} />
              ) : (
                <WihtoutUserMenuOptions handleAccountMenu={handleAccountMenu} />
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
  { name: 'Empresa', to: '/about-us' },
  { name: 'Projetos', to: '/projects' },
  { name: 'Parceiros', to: '/partners' },
  { name: 'Duvidas', to: '/faq' }
]
