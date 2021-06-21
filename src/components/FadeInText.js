import { useState } from 'react'

export const FadeInText = ({ code, className, onIter, children }) => {
  const [iter, setIter] = useState(0)

  const onAnimationIteration = () => {
    setIter(iter == 0 ? 1 : 0)
    if (iter == 1) onIter()
  }

  const props = { className: `fadein ${className}`, onAnimationIteration }

  return code ? <code {...props}>{children}</code> : <span {...props}>{children}</span>
}

FadeInText.defaultProps = { code: false, className: '' }

export default FadeInText
