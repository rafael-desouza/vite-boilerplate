import { Form, Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  flex: 15%;
`

export const StyledForm = styled(Form)`
  flex: 75%;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const Footer = styled.div`
  flex: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Span = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes['xl']};

    margin: 0;
  `}
`

export const FooterText = styled(Link)`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes['xl']};
    color: ${theme.colors.primary};

    padding: 0 ${theme.size[1]} 0;
    margin: 0;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.fonts.sizes.base};
    padding: ${theme.size[4]};
    border: 1px solid black;
    outline: none;
    border-radius: ${theme.borderRadius.lg};
    margin-bottom: ${theme.size[4]};

    background-color: inherit;
    color: ${theme.colors.light};

    &:hover {
      outline: 1px solid ${theme.colors.light};
    }
    &:focus {
      outline: 1px solid ${theme.colors.primary};
    }
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    margin-top: ${theme.size[4]};
    background-color: #007bff;
    color: inherit;
    font-size: ${theme.fonts.sizes['xl']};
    width: 100%;
    padding: ${theme.size[3]} ${theme.size[4]};
    margin-bottom: ${theme.size[4]};
    outline: none;
    border-radius: ${theme.borderRadius['xl']};
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  `}
`
