import { FadeIn } from './'

export const Search = ({ delay, value, set }) => (
  <FadeIn delay={delay} className='search'>
    <input type='text' placeholder='Enter Search Term' value={value} onChange={(e) => set(e.target.value)} />
  </FadeIn>
)

Search.defaultProps = {
  delay: 0.4,
}

const match = (src, term) => src.toLowerCase().includes(term.trim().toLowerCase())

Search.match = ({ title = '', author = ['', ''] }, term) =>
  term.startsWith('@') ? match(author[1], term.substring(1, term.length) ?? '') : match(title, term)

export default Search
