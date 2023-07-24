import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Counter } from './components/Counter'
import HomePage from './components/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  )
}

export default App
