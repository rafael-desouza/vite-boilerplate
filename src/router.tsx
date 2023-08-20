import { createBrowserRouter } from 'react-router-dom'

import {
  loginAction,
  logoutAction,
  protectedLoader
} from './Auth/protectedLoader'
import { Counter } from './components/Counter'
import { ContactPage, contactLoader } from './pages/Contact/ContactPage'
import { ErrorPage } from './pages/Error/ErrorPage'
import { Home, getContacts } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { PublicRoot } from './pages/PublicRoot/PublicRoot'

export const AppRouter = createBrowserRouter([
  {
    element: <PublicRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        loader: getContacts,
        element: <Home />
      },
      {
        path: 'counter',
        loader: protectedLoader,
        element: <Counter />
      },
      {
        path: 'contact/:contactId',
        loader: contactLoader,
        element: <ContactPage />
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
    ]
  }
])
