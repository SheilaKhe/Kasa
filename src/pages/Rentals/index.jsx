import { Navigate, useParams } from 'react-router-dom'
import rentals from '../../datas/Rentals.json'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import Host from '../../components/Host'
import './_rental.scss'

function Rental() {
  const { id } = useParams() //récupération de l'ID produit de l'url
  const rental = rentals.find((rental) => rental.id === id)

  if (!rental) {
    // si l'élément id de l'url est différent d'un élément de la base de données du fichier JSON.
    return <Navigate to="/404" />
  }

  //constante destructurée affectée à l'objet rental contenant les données.
  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = rental
  return (
    <div className="rental">
      <Carousel classname="rental__carrousel" slider={pictures} />
      <div className="rental__desc">
        <div className="rental__desc__header">
          <h1 className="rental__desc__header--title">{title}</h1>
          <p className="rental__desc__header--loc">{location}</p>
        </div>
      </div>
      <div className="rental__tags">
        <Tags tags={tags} />
      </div>
      <div className="rental__features">
        <div className="rental__features--rating">
          <Rating rating={rating} />
        </div>
        <div className="rental__features--host">
          <Host host={host} />
        </div>
      </div>
      <div className="rental__description">
        <Collapse title="Description" text={description} />
        <Collapse title="Équipements" equipment={equipments} />
      </div>
    </div>
  )
}

export default Rental
