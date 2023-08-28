import { createBrowserRouter } from 'react-router-dom'

import { loginAction } from './Auth/loginAction'
import { logoutAction } from './Auth/logoutAction'
import { protectedLoader } from './Auth/protectedLoader'
import { Counter } from './components/Counter'
import { USER_ROLES } from './helpers/types'
import { ContactPage, contactLoader } from './pages/Contact/ContactPage'
import { ErrorPage } from './pages/Error/ErrorPage'
import { Home, getContacts } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { PublicRoot } from './pages/PublicRoot/PublicRoot'

export const AppRouter = createBrowserRouter([
  {
    element: <PublicRoot />,
    errorElement: <ErrorPage />,
    path: '/',
    children: [
      {
        path: '/',
        loader: getContacts,
        element: <Home />
      },
      {
        path: 'contact/:contactId',
        loader: contactLoader,
        element: <ContactPage />
      }
    ]
  },
  {
    element: <PublicRoot />,
    path: 'admin',
    loader: (args) =>
      protectedLoader({ ...args, requestedRole: USER_ROLES.USER }),
    children: [
      {
        path: '/admin/counter',
        element: <Counter />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />,
    action: loginAction
  },
  {
    path: '/logout',
    loader: logoutAction
  }
])
