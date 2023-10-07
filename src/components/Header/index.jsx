import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './_header.scss'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/">
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <div className="nav__links">
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
