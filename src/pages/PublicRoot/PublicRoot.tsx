import { Outlet } from 'react-router-dom'

import { Container } from '../../components/Container'
import { Menu } from '../../components/Menu'

export const PublicRoot = () => {
  return (
    <>
      <Menu />

      <Container>
        <Outlet />
      </Container>
    </>
  )
}
