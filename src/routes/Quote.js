import { useLocation } from 'react-router-dom'

import { Quote } from '../components'
import { useTitle } from '../hooks'

export default () => {
  const query = new URLSearchParams(useLocation().search)
  useTitle('Quote')

  const get = (n, d) => query.get(n) || d

  return <Quote quote={get('q', '?q=')} r={get('r', '- &r=')} />
}
