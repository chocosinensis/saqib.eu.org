import { FadeIn } from './'

export const Search = ({ delay, value, set, placeholder, onEnter }) => (
  <FadeIn delay={delay} className='search'>
    <input
      type='text'
      {...{ value, placeholder }}
      onChange={(e) => set(e.target.value)}
      onKeyUp={(e) => {
        if (e.key === 'Enter') onEnter(e)
      }}
    />
  </FadeIn>
)

Search.defaultProps = { delay: 0.4, placeholder: 'Enter Search Term' }

const match = (src, term) => src.toLowerCase().includes(term.trim().toLowerCase())

Search.match = ({ title = '', author = ['', ''] }, term) =>
  term.startsWith('@') ? match(author[1], term.substring(1, term.length) ?? '') : match(title, term)

export default Search
