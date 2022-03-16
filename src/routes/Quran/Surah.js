import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'

import { FadeIn, Loading, SelectLangs, Ayah } from '../../components'
import { useFetch, useTitle } from '../../hooks'

const Surah = () => {
  const [{ info, surah }, setAyahs] = useState({ info: { num: '', eng: '', ara: '', mng: '' }, surah: [] })
  const { surah: surahno } = useParams()
  const navigate = useNavigate()
  const a = new URLSearchParams(useLocation().search).get('a') ?? ''
  const [lang, setLang] = useState(JSON.parse(localStorage.getItem('lang') || '[]'))
  const l = lang[0] !== '' ? `&lang=${lang.join(',')}` : ''
  const [data, loading] = useFetch(`quran/${surahno}?range=${a}${l}`)

  useEffect(() => {
    if (!data) return
    if (!data.success) return navigate('/quran', { replace: true })
    setAyahs(data)
  }, [data, navigate])

  useEffect(() => {
    const navigate = (e) => {
      const s = parseInt(surahno)
      if (e.ctrlKey) {
        if (e.key == 'ArrowLeft') navigate(e.shiftKey ? s > 1 && `/quran/${s - 1}` : '/quran')
        if (e.key == 'ArrowRight') e.shiftKey && s < 114 && navigate(`/quran/${s + 1}`)
      }
    }

    document.addEventListener('keyup', navigate)
    return () => document.removeEventListener('keyup', navigate)
    // eslint-disable-next-line
  }, [JSON.stringify(lang), navigate, surahno])

  useTitle(info.eng, info.ara)

  return (
    <section className='surah'>
      <FadeIn el='h3' delay={0.2} className='title'>
        {info.ara}
        <br />
        {info.eng}
      </FadeIn>
      <SelectLangs {...{ lang, setLang }} />
      <FadeIn el='section' delay={0.4} className='ayahs'>
        {info.bismillah && (
          <div className='ayah' id='bismillah'>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </div>
        )}
        {loading ?
          <Loading /> :
          surah.map(({ num, ara, ...ayah }) =>
            <Ayah key={num} {...{ info, num, ara, lang, ayah }} />)}
      </FadeIn>
      <FadeIn el='ul' className='nav' delay={0.6}>
        {links(surahno, a).map(([href, text]) => (
          <Link key={text} to={href} className='float hover-link'>
            {text}
          </Link>
        ))}
      </FadeIn>
    </section>
  )
}

const links = (surah, a) => {
  const links = []

  if (surah != '1') links.push([`/quran/${parseInt(surah) - 1}`, 'Previous'])
  if (a !== '') links.push([`/quran/${surah}`, 'Full'])
  links.push(['/quran', 'Back'])
  if (surah != '114') links.push([`/quran/${parseInt(surah) + 1}`, 'Next'])

  return links
}

export default Surah
