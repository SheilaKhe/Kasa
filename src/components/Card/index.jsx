import { Link } from 'react-router-dom'

function Card({ id, cover, title }) {
  return (
    <article className="card">
      <Link className="card__content" to={`/rental/${id}`}>
        <img className="card__content--img" src={cover} alt={title} />
        <h2 className="card__content--title">{title}</h2>
      </Link>
    </article>
  )
}

export default Card
