import { Outlet } from 'react-router-dom'

import { Menu } from '../../components/Menu'

export const PublicRoot = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}
