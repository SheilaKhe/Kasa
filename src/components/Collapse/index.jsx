import { useState } from 'react'
import chevron from '../../assets/chevron.jpg'
import './_collapse.scss'

function Collapse({ title, description, text, equipment, open = true }) {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <article className="collapse">
      <div className="collapse__head">
        <div className="collapse__head--title">{title}</div>
        <span
          className={
            isOpen ? 'collapse__head--arrow' : 'collapse__head--arrow rotate'
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          <img className="chevron" src={chevron} alt="Chevron d'ouverture" />
        </span>
      </div>
      {text
        ? isOpen && <p className="collapse__text">{text}</p>
        : equipment
        ? isOpen && (
            <ul className="collapse__equipments">
              {equipment.map((element, index) => (
                <li
                  className="collapse__equipments--list"
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
