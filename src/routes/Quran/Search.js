import { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import { FadeIn, Loading, SelectLangs } from '../../components'
import { useFetch, useTitle } from '../../hooks'

export default () => {
  const q = new URLSearchParams(useLocation().search)
  const navigate = useNavigate()

  const [lang, setLang] = useState(JSON.parse(localStorage.getItem('lang') || '[]'))
  const term = q.get('term') || ''
  const l = q.get('l') || 'eng'

  const [data, loading] = useFetch(`quran/search?term=${term}&l=${l}&lang=${lang.join(',')}`)
  const [{ ayahs }, setAyahs] = useState({ ayahs: [] })

  useEffect(() => {
    if (!data) return
    if (!data.success) return navigate('/quran', { replace: true })
    setAyahs(data)
  }, [data, navigate])

  useEffect(() => {
    const back = (e) => {
      if (e.ctrlKey && e.key == 'ArrowLeft') navigate('/quran', { replace: true })
    }

    document.addEventListener('keyup', back)
    return () => document.removeEventListener('keyup', back)
  }, [navigate])

  useTitle(term, 'Search', 'Quran')

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
            <Link key={`${info.num}:${num}`} to={`/quran/${info.num}?a=${num}`}>
              <div className='ayah'>
                <p className='num float design'>
                  {info.num} : {num}
                </p>
                {lang.includes('ara') && <p className='ara'>{ara}</p>}
                {
                  /* prettier-ignore */ ['eng:sai', 'eng:arb', 'ban'].map((l) => lang.includes(l) && (
                    <Fragment key={l}>
                      <p className='num'>{info.translations[l]}</p>
                      <p className={l == 'ban' ? 'ban' : l}>{ayah[l]}</p>
                    </Fragment>
                  ))
                }
              </div>
            </Link>
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
