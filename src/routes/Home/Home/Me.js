import { motion } from 'framer-motion';

const Me = () => (
  <h1 className="design name">
    <motion.span
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeIn' }}
    >Nazmus Saqib</motion.span>
    <br/>
    <motion.span className="small"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeIn', delay: 0.2 }}
    >Trying to be A Tranquil Soul</motion.span>
  </h1>
);

export default Me;
