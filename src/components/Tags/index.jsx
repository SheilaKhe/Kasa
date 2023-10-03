import './_tag.scss'

function Tags({ tags }) {
  return (
    <ul className="tags">
      {tags.map((keyTag) => (
        <li className="tags__item" key={keyTag}>
          {keyTag}
        </li>
      ))}
    </ul>
  )
}

export default Tags
