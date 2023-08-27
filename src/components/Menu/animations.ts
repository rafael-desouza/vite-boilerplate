import { Variants } from 'framer-motion'

import theme from '../../styles/theme'

export const mobileNavbar: Variants = {
  open: {
    height: '100vh',
    transition: {
      type: 'spring',
      stiffness: 50,
      restDelta: 0.5
    }
  },
  closed: {
    height: theme.size[20],
    transition: {
      type: 'spring',
      stiffness: 50,
      restDelta: 0.5
    }
  }
}

export const desktopNavbar: Variants = {
  open: {
    height: theme.size[20]
  },
  closed: {
    height: theme.size[20]
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
