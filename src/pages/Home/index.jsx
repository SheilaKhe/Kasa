import Banner from '../../components/Banner'
import Rentals from '../../datas/Rentals.json'
import banImg from '../../assets/ban.png'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import '../../components/Card/_card.scss'
import './_home.scss'

function Home() {
  return (
    <main>
      <Banner img={banImg} text="Chez vous, partout et ailleurs" />
      <section className="gallery">
        {Rentals.map((rental) => {
          return (
            <Card id={rental.id} cover={rental.cover} title={rental.title} />
          )
        })}
      </section>
    </main>
  )
}

export default Home
