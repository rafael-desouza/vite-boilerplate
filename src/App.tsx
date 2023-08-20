import './@mocks/mockApi'
import { RouterProvider } from 'react-router-dom'

import { AppRouter } from './router'

function App() {
  return (
    <RouterProvider
      router={AppRouter}
      fallbackElement={<p>Initial Load...</p>}
    />
  )
}

export default App
