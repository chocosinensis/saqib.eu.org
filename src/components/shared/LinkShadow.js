import { motion } from 'framer-motion';

const LinkShadow = ({ onTransitionEnd }) => (
  <motion.div className="link-shadow"
    initial={{ transform: 'translate(-25vw) rotate(30deg)' }}
    animate={{ transform: 'translate(150vw) rotate(30deg)' }}
    transition={{ duration: 1.2, ease: 'easeInOut' }}
    onTransitionEnd={onTransitionEnd}
  ></motion.div>
);

export default LinkShadow;
