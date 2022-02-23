import { motion } from 'framer-motion'

const props = (delay = 0) => ({
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.2, ease: 'easeIn', delay },
})

const Me = () => (
  <h1 className='design name'>
    <motion.span {...props()}>Nazmus Saqib</motion.span>
    <br />
    <motion.span className='small' {...props(0.2)}>
      Trying to be A Tranquil Soul
    </motion.span>
  </h1>
)

export default Me
