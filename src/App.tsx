import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { CounterPage } from './pages/CounterPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </Router>
  )
}

export default App
