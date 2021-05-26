import { motion } from 'framer-motion'

export const FadeIn = ({ el, className, duration, delay, __html, children }) => {
  const El = motion[el]

  const props = {
    className,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { ease: 'easeInOut', duration, delay },
  }

  return __html ? <El dangerouslySetInnerHTML={{ __html }} {...props} /> : <El {...props}>{children}</El>
}

FadeIn.defaultProps = {
  el: 'div',
  className: '',
  duration: 0.2,
  delay: 0,
  __html: false,
}

export default FadeIn
