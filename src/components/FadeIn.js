import { motion } from 'framer-motion';

const FadeIn = ({
  el, className,
  duration, delay,
  __html, children
}) => {
  const El = motion[el];

  return __html ? (
    <El className={className} dangerouslySetInnerHTML={{ __html }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration, delay }}
    />
  ) : (
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
  delay: 0,
  __html: false,
};

export default FadeIn;
