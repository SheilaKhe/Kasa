import { useState } from 'react'
import chevron from '../../assets/chevron.jpg'
import './_carousel.scss'

function Carrousel({ slider }) {
  const [sliding, setSliding] = useState(0) //variable d'état => état initial
  const slideLength = slider.length

  function Previous() {
    /*permet au slide de revenir à l'image précédente 
    ou à la dernière image si le slide est déja à la première image */
    setSliding(sliding === 0 ? slideLength - 1 : sliding - 1)
  }

  function Next() {
    /* permet au slide d'aller vers l'image suivante 
    ou de revenir à la première image si le slide est déjà sur la dernière image  */
    setSliding(sliding === slideLength - 1 ? 0 : sliding + 1)
  }

  return (
    <div className="carrousel">
      {slideLength > 1 ? ( // ces éléments apparaissent seulement si le nombre de slide est supérieur à 1
        <>
          <img
            className="carrousel__previousSlide"
            src={chevron}
            alt="Précédent"
            onClick={() => Previous()}
          />
          <img
            className="carrousel__nextSlide"
            src={chevron}
            alt="Suivant"
            onClick={() => Next()}
          />
          <p className="carrousel__point">
            {' '}
            {sliding + 1 + '/' + slider.length}
          </p>
        </>
      ) : null}

      {slider.map((image, index) => {
        return (
          <div
            className={
              index === sliding
                ? 'carrousel__content'
                : 'carrousel__content--off'
            }
            key={index}
          >
            {index === sliding && (
              <img
                className="carrousel__content__image"
                src={image}
                alt="Location"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Carrousel
