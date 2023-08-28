import { createBrowserRouter } from 'react-router-dom'

import { loginAction } from './Auth/loginAction'
import { logoutAction } from './Auth/logoutAction'
import { protectedLoader } from './Auth/protectedLoader'
import { signupAction } from './Auth/signupAction'
import { AccountRoot } from './components/AccountRoot'
import { Counter } from './components/Counter'
import { PublicRoot } from './components/PublicRoot'
import { USER_ROLES } from './helpers/types'
import { ContactPage, contactLoader } from './pages/Contact/ContactPage'
import { ErrorPage } from './pages/Error/ErrorPage'
import { Home, getContacts } from './pages/Home/Home'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'

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
    element: <AccountRoot />,
    path: 'auth',
    children: [
      {
        path: '/auth/login',
        element: <Signin />,
        action: loginAction
      },
      {
        path: '/auth/create-account',
        element: <Signup />,
        action: signupAction
      },
      {
        path: '/auth/logout',
        loader: logoutAction
      }
    ]
  }
])
