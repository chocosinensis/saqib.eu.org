import { motion } from 'framer-motion'

export const Shadow = ({ translate: { from, to }, duration }) => (
  <motion.div
    className='shadow'
    initial={{ transform: `translate(${from}) rotateZ(30deg)` }}
    animate={{ transform: `translate(${to}) rotateZ(30deg)` }}
    transition={{ delay: 3, duration, ease: 'linear', repeat: Infinity, repeatDelay: 3 }}
  />
)

Shadow.defaultProps = { translate: { from: '-20vw', to: '300vw' }, duration: 3 }

export default Shadow
