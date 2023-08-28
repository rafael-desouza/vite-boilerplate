import { Outlet } from 'react-router-dom'

import * as S from './styles'

import Logo from '../../assets/svg-logo-h.svg'

export const AccountRoot = () => {
  return (
    <S.Container>
      <S.Content>
        <S.StyledLink to="/">
          <S.Logo>
            <img src={Logo} alt="a" />
          </S.Logo>
        </S.StyledLink>
        <S.OutletContainer>
          <Outlet />
        </S.OutletContainer>
      </S.Content>
    </S.Container>
  )
}
