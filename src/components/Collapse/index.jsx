import { useState } from 'react'
import arrowUp from '../../assets/arrow-up.png'
import arrowDown from '../../assets/arrow-down.png'
import './_collapse.scss'

function Collapse({ title, description, text, equipment }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <article className="collapse">
      <div className="collapse__head" onClick={() => setIsOpen(!isOpen)}>
        <div className="collapse__head--title">{title}</div>
        {isOpen ? (
          <img className="collapse__head--arrow" src={arrowUp} alt="Flèche" />
        ) : (
          <img className="collapse__head--arrow" src={arrowDown} alt="Flèche" />
        )}
      </div>
      {text
        ? isOpen && <p className="collapse__text">{text}</p>
        : equipment
        ? isOpen && (
            <ul className="collapse__text">
              {equipment.map((element, index) => (
                <li
                  className="collapse__text--item"
                  key={`${element}-${index}`}
                >
                  {element}
                </li>
              ))}
            </ul>
          )
        : isOpen && <div className="collapse__description">{description}</div>}
    </article>
  )
}

export default Collapse
