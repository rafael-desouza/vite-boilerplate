import { Outlet } from 'react-router-dom'

import { Menu } from '../../components/Menu_New'

export const PublicRoot = () => {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}
