import { motion } from 'framer-motion';

const Shadow = () => (
  <motion.div className="shadow"
    initial={{ transform: 'translate(-20vw) rotateZ(30deg)' }}
    animate={{ transform: 'translate(300vw) rotateZ(30deg)' }}
    transition={{
      delay: 3, duration: 3, ease: 'linear',
      repeat: Infinity, repeatDelay: 3
    }}
  ></motion.div>
);

export default Shadow;
