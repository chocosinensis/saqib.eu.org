import { useState } from 'react'
import { motion } from 'framer-motion'

export * from './Card'
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
    <ul>
      {
        // prettier-ignore
        Array(18).fill(0).map(() => <li />)
      }
    </ul>
  </div>
)

export const Shadow = ({ translate: { from, to }, duration }) => (
  <motion.div
    className='shadow'
    initial={{ transform: `translate(${from}) rotateZ(30deg)` }}
    animate={{ transform: `translate(${to}) rotateZ(30deg)` }}
    transition={{ delay: 3, duration, ease: 'linear', repeat: Infinity, repeatDelay: 3 }}
  />
)

Shadow.defaultProps = { translate: { from: '-20vw', to: '300vw' }, duration: 3 }
