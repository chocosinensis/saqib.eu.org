import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import { FadeIn, Loading, SelectLangs, Ayah } from '../../components'
import { useFetch, useTitle } from '../../hooks'

export default () => {
  const q = new URLSearchParams(useLocation().search)
  const navigate = useNavigate()
  const langs = ['eng:sai', 'eng:arb', 'ban']

  const [lang, setLang] = useState(JSON.parse(localStorage.getItem('lang') || '[]'))
  const term = q.get('term') || ''
  const l = q.get('l') || 'eng'

  const [data, loading] = useFetch(`quran/search?term=${term}&l=${l}&lang=${lang.join(',')}`)
  const [{ ayahs }, setAyahs] = useState({ ayahs: [] })

  const copy = () => {
    const ays = ayahs.map(({ info, num, ara, ...ayah }) => {
      const trs = langs.map((l) => lang.includes(l) ? `${info.translations[l]}\n${ayah[l]}` : '')
        .filter((a) => a !== '')
      return `${info.num} : ${num}\n\n${ara}\n\n${trs.join('\n\n')}`
    }).join('\n\n\n')
    navigator.clipboard.writeText(ays)
  }

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
          <p className='copy' onClick={copy}><i className='fas fa-clipboard' /></p>
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </div>
        {loading ?
          <Loading /> :
          ayahs.map(({ info, num, ara, ...ayah }) => 
            <Ayah key={`${info.num}:${num}`} link={`/quran/${info.num}?a=${num}`} {...{ info, num, ara, lang, ayah }} />)}
      </FadeIn>
      <FadeIn el='ul' className='nav' delay={0.6}>
        <Link to='/quran' className='float hover-link'>
          Back
        </Link>
      </FadeIn>
    </section>
  )
}
