import logo from './logo.gif'
import './App.css'

const App = () => {
  return (
    <div className="nav-container">
      <header>
        <img src={logo} alt="logo" />
        <p>
            <a href='/'>Microfrontends</a>
            |
            <a href='/orders'>My Orders</a>
            |
            <a href='/auth'>Registration</a>
        </p>
      </header>
    </div>
  )
}

export default App;
