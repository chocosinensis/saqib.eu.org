import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Tag = () => {
  const [tag, setTag] = useState({ type: 'code', text: 'Developer' });

  useEffect(() => {
    const interval = setInterval(() => {
      setTag({
        type: tag.type === 'code' ? 'design' :
          tag.type === 'design' ? '' :
          tag.type === '' ? 'code' : '',
        text: tag.type === 'code' ? 'Designer' :
          tag.type === 'design' ? 'Student' :
          tag.type === '' ? 'Developer' : ''
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [tag]);

  return (
    <motion.div className="tag"
      initial={{ boxShadow: '0 0 0 rgba(0, 0, 0, 0.4)' }}
      animate={{ boxShadow: '0 0 10px rgba(74, 118, 212, 0.4)' }}
      transition={{ duration: 0.5, delay: 0.5, ease: 'linear' }}
    >
      <motion.div className="tag-border"
        initial={{ x: -10 }}
        animate={{ x: 200 }}
        transition={{
          ease: 'easeInOut', type: 'tween', delay: 7.5, duration: 0.5,
          repeat: Infinity, repeatType: 'mirror', repeatDelay: 7.5,
        }}
      ></motion.div>
      <motion.span className={tag.type}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: 'linear', type: 'tween', duration: 4,
          repeat: Infinity, repeatType: 'mirror'
        }}
      >{tag.text}</motion.span>
    </motion.div>
  );
}

export default Tag;
