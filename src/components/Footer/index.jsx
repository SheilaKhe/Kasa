import footerLogo from '../../assets/logo-wh.png'
import './_footer.scss'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <img className="footer__logo" src={footerLogo} alt="Logo Kasa" />

      <p className="footer__copy">&copy; Kasa, {year} All rights reserved </p>
    </footer>
  )
}

export default Footer
