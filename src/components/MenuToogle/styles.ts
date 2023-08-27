import { motion } from 'framer-motion'
import { css, styled } from 'styled-components'

export const OpenLinksButton = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: none;
    color: white;
    font-size: ${theme.fonts.sizes['5xl']};
    cursor: pointer;
    display: block;
    padding-left: ${theme.size['4']};
  `}
`

export const StyledPath = styled(motion.path)`
  ${({ theme }) => css`
    fill: transparent;
    stroke: ${theme.colors.white};
    stroke-width: 3;
    stroke-linecap: round;
  `}
`
