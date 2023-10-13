import { Link } from 'react-router-dom'
import './_error.scss'

function Error() {
  return (
    <main className="error">
      <section className="error__title">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas...</h2>
      </section>
      <Link to="/">Retourner vers la page d'accueil</Link>
    </main>
  )
}

export default Error
