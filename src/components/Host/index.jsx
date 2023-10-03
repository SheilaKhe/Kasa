import './_host.scss'

function Host({ host }) {
  return (
    <div className="host">
      <div className="host__name">{host.name}</div>
      <img className="host__picture" src={host.picture} alt={host.name} />
    </div>
  )
}

export default Host
