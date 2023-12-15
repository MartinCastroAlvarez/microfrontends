import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import HomePage from 'microfrontends-home/index.js'
import OrdersPage from 'microfrontends-orders/index.js'
import AuthPage from 'microfrontends-auth/index.js'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/orders" element={<OrdersPage/>} />
        <Route path="/auth" element={<AuthPage/>} />
      </Routes>
    </Router>
  )
}

export default App
