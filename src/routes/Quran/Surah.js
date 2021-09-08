import { Fragment, useEffect, useState } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'

import { FadeIn, Loading, SelectLangs } from '../../components'
import { useFetch, useTitle } from '../../hooks'

const Surah = () => {
  const [{ info, surah }, setAyahs] = useState({ info: { num: '', eng: '', ara: '', mng: '' }, surah: [] })
  const { surah: surahno } = useParams()
  const router = useHistory()
  const q = new URLSearchParams(useLocation().search)
  const [lang, setLang] = useState((q.get('lang') ?? '').split(/\s*,\s*/g))
  const l = lang[0] !== '' ? `?lang=${lang.join(',')}` : ''
  const [data, loading] = useFetch(`quran/${surahno}${l}`)

  useEffect(() => {
    if (!data) return
    if (!data.success) return router.push('/quran')
    setAyahs(data)
  }, [data, router])
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
                /* prettier-ignore */ ['eng:sai', 'eng:arb', 'ban'].map((l) => lang.includes(l) && (
                    <Fragment key={l}>
                      {lang.length !== 1 && <p className='num'>{info.translations[l]}</p>}
                      <p className={l}>{ayah[l]}</p>
                    </Fragment>
                  ))
              }
            </div>
          ))
        )}
      </FadeIn>
      <FadeIn el='ul' className='nav' delay={0.6}>
        {links(surahno, lang).map(([href, text]) => (
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
  const l = lang[0] !== '' || lang.join(',') !== 'ara,eng:sai,ban' ? `?lang=${lang.join(',')}` : ''

  if (surah != '1') links.push([`/quran/${Number(surah) - 1}${l}`, 'Previous'])
  links.push(['/quran', 'Back'])
  if (surah != '114') links.push([`/quran/${Number(surah) + 1}${l}`, 'Next'])

  return links
}

export default Surah
