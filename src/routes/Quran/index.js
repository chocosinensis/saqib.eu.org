import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Card, FadeIn, Search } from '../../components'
import { useFetch, useTitle } from '../../hooks'

const Quran = () => {
  const query = new URLSearchParams(useLocation().search)
  const [search, setSearch] = useState(query.get('q') ?? '')
  const [surahs] = useFetch('quran', [[], [], []])

  useTitle('Quran', 'القرآن الكريم')

  return (
    <section className='quran'>
      <FadeIn el='h2' delay={0.2} className='title'>
        The Noble Quran <br /> القرآن الكريم
      </FadeIn>
      <Search value={search} set={setSearch} delay={0.4} />
      <section className='surahs'>
        {surahs.map((list, i) => (
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
        ))}
      </section>
    </section>
  )
}

export default Quran
export { default as Surah } from './Surah'
