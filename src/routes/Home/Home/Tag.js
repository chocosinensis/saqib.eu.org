import { useState } from 'react'
import { motion } from 'framer-motion'

import { FadeInText } from '../../../components'

const Tag = () => {
  const [tag, setTag] = useState({ type: 'hi', text: '_αιυㅤ' })

  return (
    <motion.div
      className='tag'
      initial={{ boxShadow: '0 0 0 rgba(0, 0, 0, 0.4)' }}
      animate={{ boxShadow: '0 0 10px rgba(74, 118, 212, 0.4)' }}
      transition={{ duration: 0.5, delay: 0.5, ease: 'linear' }}
    >
      <motion.div
        className='tag-border'
        initial={{ x: -10 }}
        animate={{ x: 200 }}
        transition={{
          ease: 'easeInOut',
          type: 'keyframes',
          delay: 7.5,
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 7.5,
        }}
      />
      <FadeInText
        className={tag.type}
        onIter={() =>
          // prettier-ignore
          setTag({
            type: tag.type === 'hi' ? 'code' : tag.type === 'code' ? 'design' : tag.type === 'design' ? '' : tag.type === '' ? 'hi' : '',
            text: tag.type === 'hi' ? 'Developer' : tag.type === 'code' ? 'Designer' : tag.type === 'design' ? 'Student' : tag.type === '' ? '_αιυㅤ' : '',
          })
        }
      >
        {tag.text}
      </FadeInText>
    </motion.div>
  )
}

export default Tag
