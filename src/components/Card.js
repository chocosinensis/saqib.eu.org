import { Link } from 'react-router-dom'

import { FadeIn } from './'

const CardContent = ({ title, author, children }) => (
  <>
    <h3>{title}</h3>
    <p className='author design float'>{author}</p>
    {children}
  </>
)

export const Card = ({ className, href, title, author, i, nohyperlink, children }) => {
  const content = <CardContent {...{ title, author }}>{children}</CardContent>

  return (
    <FadeIn className={`card ${className}`} delay={0.2 * i}>
      {nohyperlink ? <div>{content}</div> : <Link to={href}>{content}</Link>}
    </FadeIn>
  )
}

Card.defaultProps = { i: 0, nohyperlink: false }

export default Card
