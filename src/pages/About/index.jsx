import Banner from '../../components/Banner'
import Ban from '../../assets/ban-about.png'
import Infos from '../../datas/About.json'
import Collapse from '../../components/Collapse'
import './_about.scss'

function About() {
  return (
    <main className="about">
      <Banner img={Ban} />
      <section className="about__infos">
        {Infos.map((infos) => {
          return (
            <Collapse
              key={infos.id}
              title={infos.title}
              description={infos.description}
            />
          )
        })}
      </section>
    </main>
  )
}

export default About
