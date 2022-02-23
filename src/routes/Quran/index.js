import { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Card, FadeIn, Loading, Search } from '../../components'
import { useFetch, useTitle } from '../../hooks'

const SearchAyah = () => {
  const [show, setShow] = useState(false)
  const [term, setTerm] = useState('')
  const [l, setL] = useState('eng')
  const button = useRef(null)

  const link = `/quran/search?term=${term}&l=${l}`
  const options = [
    { value: 'ara', text: 'Arabic' },
    { value: 'eng', text: 'English' },
    { value: 'ban', text: 'Bengali' },
  ]

  return show ? (
    <Card nohyperlink className='search'>
      <Search value={term} set={setTerm} onEnter={() => button.current.click()} />
      <FadeIn className='select' delay={0.2}>
        <select value={l} onChange={(e) => setL(e.target.value)}>
          {options.map(({ value, text }) => (
            <option key={value} value={value}>
              {text}
            </option>
          ))}
        </select>
      </FadeIn>
      <FadeIn el='span' className='l' delay={0.6}>
        <div className='float hover-link' onClick={() => setShow((show) => !show)}>
          Hide
        </div>
        <Link to={link} className='float hover-link' ref={button}>
          Search
        </Link>
      </FadeIn>
    </Card>
  ) : (
    <div className='show l'>
      <FadeIn className='float hover-link end' delay={0.4} onClick={() => setShow((show) => !show)}>
        Show Search Bar
      </FadeIn>
    </div>
  )
}

export const Quran = () => {
  const query = new URLSearchParams(useLocation().search)
  const [search, setSearch] = useState(query.get('q') ?? '')
  const [surahs, loading] = useFetch('quran', [[], [], []])

  useTitle('Quran', 'القرآن الكريم')

  return (
    <section className='quran'>
      <FadeIn el='h2' delay={0.2} className='title'>
        القرآن الكريم
        <br />
        The Noble Quran
      </FadeIn>
      <Search value={search} set={setSearch} placeholder='Enter Surah' delay={0.4} />
      <SearchAyah />
      <section className='surahs'>
        {loading ? (
          <Loading />
        ) : (
          surahs.map((list, i) => (
            <div key={i} className='row'>
              {list
                .filter(({ eng }) => Search.match({ title: eng }, search))
                .map(({ num, eng, ara, mng }, i) => (
                  <Card key={num} href={`/quran/${num}`} title={eng} author={mng} i={i / 100}>
                    <p className='author design float num'>{num}</p>
                    <h3 className='ara'>{ara}</h3>
                  </Card>
                ))}
            </div>
          ))
        )}
      </section>
    </section>
  )
}

export default Quran
export { default as Surah } from './Surah'
export { default as SearchAyahs } from './Search'
