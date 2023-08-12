import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { PrivateRoutes } from './components/PrivateRoutes/index'
import { CounterPage } from './pages/CounterPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <Router>
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
