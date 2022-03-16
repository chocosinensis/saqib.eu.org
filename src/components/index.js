import { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Card } from './Card'

export { Card }
export * from './Search'

export const FadeIn = ({ el, duration, delay, __html, children, ...other }) => {
  const El = motion[el]

  const props = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { ease: 'easeInOut', duration, delay },
    ...other,
  }

  return __html ? <El dangerouslySetInnerHTML={{ __html }} {...props} /> : <El {...props}>{children}</El>
}

FadeIn.defaultProps = { el: 'div', duration: 0.2, delay: 0, __html: false }

export const FadeInText = ({ code, className, onIter, children }) => {
  const [iter, setIter] = useState(0)

  const onAnimationIteration = () => {
    setIter((iter) => (iter == 0 ? 1 : 0))
    if (iter == 1) onIter()
  }

  const props = { className: `fadein ${className}`, onAnimationIteration }

  return code ? <code {...props}>{children}</code> : <span {...props}>{children}</span>
}

FadeInText.defaultProps = { code: false, className: '' }

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 1200 120',
  preserveAspectRatio: 'none',
  style: { width: `calc(${Math.random() * 25 + 100}% + 1.3px)` },
}

export const Quote = ({ quote, r, wave: { top = '#000', bottom = '#000' } = {} }) => (
  <section className='quote'>
    <div className='wave-top'>
      <svg {...svgProps}>
        <path
          d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
          style={{ fill: top }}
        />
      </svg>
    </div>
    <div className='cursor'>
      <div />
    </div>
    <div className='cursor _'>
      <div />
    </div>
    <div className='content design'>
      <q>{quote}</q>
      <small>{r}</small>
    </div>
    <div className='wave-bottom'>
      <svg {...svgProps}>
        <path
          d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
          style={{ fill: bottom }}
        />
      </svg>
    </div>
  </section>
)

export const Loading = () => (
  <div className='book'>
    <div className='inner'>
      <div className='left' />
      <div className='middle' />
      <div className='right' />
    </div>
    <ul>{/* prettier-ignore */ Array(18).fill(0).map((v, i) => <li key={i} />)}</ul>
  </div>
)

export const Ayah = ({ info, num, ara, lang, ayah, link = false }) => {
  const langs = ['eng:sai', 'eng:arb', 'ban']
  const float = <p className='num float design'>{info.num} : {num}</p>

  const copy = () => {
    const trs = langs.map((l) => lang.includes(l) ? `${info.translations[l]}\n${ayah[l]}` : '')
      .filter((a) => a !== '')
    const ay = `${info.num} : ${num}\n\n${ara}\n\n${trs.join('\n\n')}`
    navigator.clipboard.writeText(ay)
  }

  return (
    <div className='ayah'>
      {link ? <Link to={link}>{float}</Link> : float}
      <p className='copy' onClick={copy}><i className='fas fa-clipboard' /></p>
      {lang.includes('ara') && <p className='ara'>{ara}</p>}
      {
        /* prettier-ignore */ langs.map((l) => lang.includes(l) && (
          <Fragment key={l}>
            {lang.length !== 1 && <p className='num'>{info.translations[l]}</p>}
            <p className={l == 'ban' ? 'ban' : l}>{ayah[l]}</p>
          </Fragment>
        ))
      }
    </div>
  )
}

export const SelectLangs = ({ lang, setLang }) => {
  const ls = [
    { value: 'ara', text: 'Arabic' },
    { value: 'eng:sai', text: 'English » Saheeh I.' },
    { value: 'eng:arb', text: 'English » Arberry' },
    { value: 'ban', text: 'Bengali' },
  ]
  const initLangs = () => ls.map(({ value }) => value).reduce((acc, cur) => ({ ...acc, [cur]: lang.includes(cur) }), {})
  const [show, setShow] = useState(false)
  const [langs, setLangs] = useState(initLangs())

  const set = (l) => () => {
    setLang(!langs[l] ? [...lang, l] : lang.filter((la) => la !== l))
    setLangs((langs) => ({ ...langs, [l]: !langs[l] }))
  }

  useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(lang))
    if (!Object.keys(langs).every((k) => !langs[k])) return
    setLang(['ara', 'eng:sai', 'ban'])
    setLangs(initLangs())
    // eslint-disable-next-line
  }, [JSON.stringify(lang)])

  return show ? (
    <Card className='langs' delay={0.4} nohyperlink>
      {ls.map(({ text, value }, i) => (
        <FadeIn className='item' key={text} delay={i * 0.1}>
          <input type='checkbox' value={value} aria-label={value} checked={langs[value]} onChange={set(value)} />
          {text}
        </FadeIn>
      ))}
      <div className='l item'>
        <FadeIn className='float hover-link end' delay={ls.length * 0.1} onClick={() => setShow((show) => !show)}>
          Hide
        </FadeIn>
      </div>
    </Card>
  ) : (
    <div className='show l'>
      <FadeIn className='float hover-link end' delay={0.4} onClick={() => setShow((show) => !show)}>
        Select Languages
      </FadeIn>
    </div>
  )
}

export const Shadow = ({ translate: { from, to }, duration }) => (
  <motion.div
    className='shadow'
    initial={{ transform: `translate(${from}) rotateZ(30deg)` }}
    animate={{ transform: `translate(${to}) rotateZ(30deg)` }}
    transition={{ delay: 3, duration, ease: 'linear', repeat: Infinity, repeatDelay: 3 }}
  />
)

Shadow.defaultProps = { translate: { from: '-20vw', to: '300vw' }, duration: 3 }
