import { Variants } from 'framer-motion'

import theme from '../../styles/theme'

export const mobileNavbar: Variants = {
  open: {
    height: '100vh',
    transition: {
      duration: 0.75
    }
  },
  closed: {
    height: '0',
    transition: {
      duration: 0.75
    }
  }
}

export const desktopNavbar: Variants = {
  open: {
    height: '100%'
  },
  closed: {
    height: '100%'
  }
}

export const mobileLinksContainer = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const mobileLinks = {
  closed: { opacity: 0 },
  open: { opacity: 1 }
}

export const desktopLinkContainer = {
  closed: { opacity: 1 },
  open: { opacity: 1 }
}

export const desktopLinks = {
  closed: { opacity: 1 },
  open: { opacity: 1 }
}

export const hoverLinks = {
  scale: 1.2,
  color: theme.colors.primary,
  transition: { duration: 0.25 }
}
