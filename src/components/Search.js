import { FadeIn } from './'

const Search = ({ delay, set }) => {
  return (
    <FadeIn delay={delay} className='search'>
      <input
        type='text'
        placeholder='Enter Search Term'
        onChange={(e) => set(e.target.value)}
      />
    </FadeIn>
  )
}

Search.defaultProps = {
  delay: 0.4,
}

const match = (src, term) =>
  src.toLowerCase().includes(term.trim().toLowerCase())

Search.match = ({ title = '', author = ['', ''] }, term) => {
  if (term.startsWith('@'))
    return match(author[1], term.substring(1, term.length) ?? '')

  return match(title, term)
}

export default Search
