import { useState, useEffect } from 'react'
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

export const Quote = ({ quote, r }) => (
  <section className='quote'>
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

export const SelectLangs = ({ lang, setLang }) => {
  const ls = [
    { value: 'ara', text: 'Arabic' },
    { value: 'eng', text: 'English' },
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
    if (!Object.keys(langs).every((k) => !langs[k])) return
    setLang(ls.map(({ value }) => value))
    setLangs(initLangs())
    // eslint-disable-next-line
  }, [JSON.stringify(lang)])

  return show ? (
    <Card className='langs' delay={0.4} nohyperlink>
      {ls.map(({ text, value }, i) => (
        <FadeIn className='item' key={text} delay={i * 0.1}>
          <input type='checkbox' value={value} checked={langs[value]} onChange={set(value)} />
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
