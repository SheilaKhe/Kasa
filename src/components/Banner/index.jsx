import './_banner.scss'

function Banner({ img, text }) {
  return (
    <section className="banner">
      <img
        className="banner__img"
        src={img}
        alt={text ? 'Chez vous, partout et ailleurs' : 'Bannière image'}
      />
      {text ? <h1 className="banner__text">{text}</h1> : null}
    </section>
  )
}

export default Banner
