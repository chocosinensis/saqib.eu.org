import { useEffect, useState } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'

import { FadeIn } from '../../components'
import { useFetch, useTitle } from '../../hooks'

const Surah = () => {
  const [ayahs, setAyahs] = useState({ info: { num: '', eng: '', ara: '', mng: '' }, surah: [] })
  const { surah } = useParams()
  const router = useHistory()
  const q = new URLSearchParams(useLocation().search)
  const lang = q.get('lang') ?? 'ara,eng,ban'
  const [data] = useFetch(`quran/${surah}?lang=${lang}`)

  useEffect(() => {
    if (!data) return
    if (data.length == 3 && (!data.info || !data.surah)) return router.push('/quran')
    setAyahs(data)
  }, [data])
  useTitle(ayahs.info.eng, ayahs.info.ara)

  return (
    <section className='surah'>
      <FadeIn el='h3' delay={0.4} className='title'>
        {ayahs.info.eng}
        <br />
        {ayahs.info.ara}
      </FadeIn>
      <FadeIn el='section' delay={0.6} className='ayahs'>
        {!['', '1', '9'].includes(ayahs.info.num) && (
          <div className='ayah' id='bismillah'>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </div>
        )}
        {ayahs.surah.map(({ num, ara, eng, ban }) => (
          <div key={num} className='ayah'>
            <p className='num float design'>
              {ayahs.info.num} : {num}
            </p>
            {lang.includes('ara') && <p className='ara'>{ara}</p>}
            {lang.includes('eng') && (
              <>
                <p className='num'>English - Saheeh International</p>
                <p className='eng'>{eng}</p>
              </>
            )}
            {lang.includes('ban') && (
              <>
                <p className='num'>Bengali - Mohiuddin Khan</p>
                <p className='ban'>{ban}</p>
              </>
            )}
          </div>
        ))}
      </FadeIn>
      <FadeIn el='ul' className='nav' delay={0.8}>
        {links(surah, lang).map(([href, text]) => (
          <Link key={text} to={href} className='float hover-link'>
            {text}
          </Link>
        ))}
      </FadeIn>
    </section>
  )
}

const links = (surah, lang) => {
  const links = []
  const l = lang !== 'ara,eng,ban' ? `?lang=${lang}` : ''

  if (surah != '1') links.push([`/quran/${Number(surah) - 1}${l}`, 'Previous'])
  links.push(['/quran', 'Back'])
  if (surah != '114') links.push([`/quran/${Number(surah) + 1}${l}`, 'Next'])

  return links
}

export default Surah
