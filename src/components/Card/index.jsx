import { Link } from 'react-router-dom'

function Card({ id, cover, title }) {
  return (
    <Link className="card" to={`/rental/${id}`}>
      <article className="card__content">
        <img className="card__content--img" src={cover} alt={title} />
        <h2 className="card__content--title">{title}</h2>
      </article>
    </Link>
  )
}

export default Card
