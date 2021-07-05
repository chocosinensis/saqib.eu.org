import { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

import { FadeIn, Loading, SelectLangs } from '../../components'
import { useFetch } from '../../hooks'

export default () => {
  const q = new URLSearchParams(useLocation().search)
  const router = useHistory()

  const [lang, setLang] = useState((q.get('lang') || '').split(/\s*,\s*/g))
  const term = q.get('term') || ''
  const l = q.get('l') || 'eng'

  const [data, loading] = useFetch(`quran/search?term=${term}&l=${l}&lang=${lang.join(',')}`)
  const [{ ayahs }, setAyahs] = useState({ ayahs: [] })

  useEffect(() => {
    if (!data) return
    if (!data.success) return router.push('/quran')
    setAyahs(data)
  }, [data, router])

  return (
    <section className='surah'>
      <FadeIn el='h3' className='title'>
        {term}
        <br />
        Ayahs found : {ayahs.length}
      </FadeIn>
      <SelectLangs {...{ lang, setLang }} />
      <FadeIn el='section' delay={0.4} className='ayahs'>
        <div className='ayah' id='bismillah'>
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </div>
        {loading ? (
          <Loading />
        ) : (
          ayahs.map(({ info, num, ara, ...ayah }) => (
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
        <Link to='/quran' className='float hover-link'>
          Back
        </Link>
      </FadeIn>
    </section>
  )
}
