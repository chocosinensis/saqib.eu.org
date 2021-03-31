import { useState } from 'react'

const FadeInText = ({ code, className, onIter, children }) => {
  const [iter, setIter] = useState(0)

  const onAnimationIteration = () => {
    setIter(iter == 0 ? 1 : 0)
    if (iter == 1) onIter()
  }

  return code ? (
    <code
      className={`fadein ${className}`}
      onAnimationIteration={onAnimationIteration}
    >
      {children}
    </code>
  ) : (
    <span
      className={`fadein ${className}`}
      onAnimationIteration={onAnimationIteration}
    >
      {children}
    </span>
  )
}

FadeInText.defaultProps = {
  code: false,
  className: '',
}

export default FadeInText
