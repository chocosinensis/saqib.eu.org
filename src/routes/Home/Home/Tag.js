import { useState } from 'react';
import { motion } from 'framer-motion';

const Tag = () => {
  const [tag, setTag] = useState({ type: 'code', text: 'Developer' });
  const [iter, setIter] = useState(0);

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
          ease: 'easeInOut', type: 'keyframes', delay: 7.5, duration: 0.5,
          repeat: Infinity, repeatType: 'mirror', repeatDelay: 7.5,
        }}
      ></motion.div>
      <span className={`tag-text ${tag.type}`}
        onAnimationIteration={() => {
          setIter(iter == 0 ? 1 : 0);
          if (iter == 1)
            setTag({
              type: tag.type === 'code' ? 'design' :
                tag.type === 'design' ? '' :
                tag.type === '' ? 'code' : '',
              text: tag.type === 'code' ? 'Designer' :
                tag.type === 'design' ? 'Student' :
                tag.type === '' ? 'Developer' : ''
            });
        }}
      >{tag.text}</span>
    </motion.div>
  );
}

export default Tag;
