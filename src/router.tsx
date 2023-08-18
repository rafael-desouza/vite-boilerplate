import { createBrowserRouter } from 'react-router-dom'

import { Counter } from './components/Counter'
import { ContactPage } from './pages/Contact/ContactPage'
import { ErrorPage } from './pages/Error/ErrorPage'
import { Home } from './pages/Home/Home'
import { PublicRoot } from './pages/PublicRoot/PublicRoot'

export const AppRouter = createBrowserRouter([
  {
    element: <PublicRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'counter',
        element: <Counter />
      },
      {
        path: 'contact/:contactId',
        element: <ContactPage />
      }
    ]
  },
  {
    element: <Home />,
    path: '/admin'
  }
])
