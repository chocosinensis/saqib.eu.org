import { Link } from 'react-router-dom'

import { FadeIn } from './'

const Card = ({ href, title, author, i, children }) => (
  <FadeIn className='card' delay={0.2 * i}>
    <Link to={href}>
      <h3>{title}</h3>
      <p className='author design float'>{author}</p>
      {children}
    </Link>
  </FadeIn>
)

export default Card
