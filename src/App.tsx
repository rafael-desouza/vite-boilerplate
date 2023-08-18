import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Menu } from './components/Menu'
import { PrivateRoutes } from './components/PrivateRoutes'
import { CounterPage } from './pages/CounterPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <Router>
      <Menu />

      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/counter" element={<CounterPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
