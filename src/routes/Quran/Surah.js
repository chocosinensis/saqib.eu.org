import { useEffect, useState } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'

import { FadeIn, Loading } from '../../components'
import { useFetch, useTitle } from '../../hooks'

const Surah = () => {
  const [{ info, surah }, setAyahs] = useState({ info: { num: '', eng: '', ara: '', mng: '' }, surah: [] })
  const { surah: surahno } = useParams()
  const router = useHistory()
  const q = new URLSearchParams(useLocation().search)
  const lang = q.get('lang') ?? 'ara,eng,ban'
  const [data, loading] = useFetch(`quran/${surahno}?lang=${lang}`)

  useEffect(() => {
    if (!data) return
    if (!data.success) return router.push('/quran')
    setAyahs(data)
  }, [data, router])
  useTitle(info.eng, info.ara)

  return (
    <section className='surah'>
      <FadeIn el='h3' delay={0.2} className='title'>
        {info.eng}
        <br />
        {info.ara}
      </FadeIn>
      <FadeIn el='section' delay={0.4} className='ayahs'>
        {info.bismillah && (
          <div className='ayah' id='bismillah'>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </div>
        )}
        {loading ? (
          <Loading />
        ) : (
          surah.map(({ num, ara, ...ayah }) => (
            <div key={num} className='ayah'>
              <p className='num float design'>
                {info.num} : {num}
              </p>
              {lang.includes('ara') && <p className='ara'>{ara}</p>}
              {
                /* prettier-ignore */ ['eng', 'ban'].map((l) => lang.includes(l) && (
                  <>
                    <p className='num'>{info.translations[l]}</p>
                    <p className={l}>{ayah[l]}</p>
                  </>
                ))
              }
            </div>
          ))
        )}
      </FadeIn>
      <FadeIn el='ul' className='nav' delay={0.6}>
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
