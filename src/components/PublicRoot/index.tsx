import { Outlet } from 'react-router-dom'

import * as S from './styles'

import { Menu } from '../../components/Menu'

export const PublicRoot = () => {
  return (
    <S.Container>
      <S.Content>
        <Menu />
        <S.OuletContent>
          <Outlet />
        </S.OuletContent>
      </S.Content>
    </S.Container>
  )
}
