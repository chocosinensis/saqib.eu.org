import { motion } from 'framer-motion';

const FadeIn = ({ el, className, duration, delay, children }) => {
  const El = motion[el];

  return (
    <El className={className}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration, delay }}
    >{children}</El>
  );
}

FadeIn.defaultProps = {
  el: 'div',
  className: '',
  duration: 0.2,
  delay: 0
};

export default FadeIn;
