import { createBrowserRouter } from 'react-router-dom'

import { Counter } from './components/Counter'
import { ContactPage, contactLoader } from './pages/Contact/ContactPage'
import { ErrorPage } from './pages/Error/ErrorPage'
import { Home, getContacts } from './pages/Home/Home'
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
        element: <Counter />
      },
      {
        path: 'contact/:contactId',
        loader: contactLoader,
        element: <ContactPage />
      }
    ]
  },
  {
    element: <Home />,
    path: '/admin'
  }
])
