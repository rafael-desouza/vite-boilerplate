import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { PrivateRoute } from './components/PrivateRoute/index'
import { CounterPage } from './pages/CounterPage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/counter" element={<CounterPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
