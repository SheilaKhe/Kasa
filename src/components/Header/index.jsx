import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import Home from '../../pages/Home'
import About from '../../pages/About/'
import { styled } from 'styled-components'

const NavWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  img {
    width: 120px;
  }
`
const NavLink = styled(Link)`
  margin: 0 5px;
  color: #ff6060;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

function Header() {
  return (
    <header className="header">
      <NavWrapper className="navbar">
        <img src={logo} className="header__logo" alt="logo" />
        <div className="nav__links">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </NavWrapper>
    </header>
  )
}

export default Header
