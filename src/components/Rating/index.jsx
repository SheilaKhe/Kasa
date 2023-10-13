import './_rating.scss'
import emptyStar from '../../assets/empty-star.svg'
import fullStar from '../../assets/full-star.svg'

function Rating({ rating }) {
  const rates = [1, 2, 3, 4, 5]
  return (
    <div className="rating">
      {rates.map((rate) =>
        rating >= rate ? (
          <img
            className="rating__star"
            key={rate}
            src={fullStar}
            alt="Étoile"
          />
        ) : (
          <img
            className="rating__star"
            key={rate}
            src={emptyStar}
            alt="Étoile vide"
          />
        )
      )}
    </div>
  )
}
export default Rating
