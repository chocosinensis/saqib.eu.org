import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useScroll } from '../../hooks'

const links = [
  ['/', 'Home'],
  ['/quran', 'Quran'],
  ['/articles', 'Articles'],
  ['/projects', 'Projects'],
]

const Links = ({ aside, setAside }) => (
  <ul className={`links ${aside ? 'show' : ''}`}>
    {links.map(([h, n], i) => (
      <li key={h} style={{ transitionDelay: `${0.2 * (i + 1)}s` }}>
        <Link to={h} onClick={() => setAside(false)}>
          {n}
        </Link>
      </li>
    ))}
  </ul>
)

export const Header = () => {
  const [aside, setAside] = useState(false)
  const [top] = useScroll(0, -70)

  return (
    <>
      <header style={{ top }}>
        <div className='logo'>
          <Link to='/' className='style' onClick={() => setAside(false)}>
            Saqib
          </Link>
        </div>
        <nav>
          <button className='bars' onClick={() => setAside(!aside)}>
            <i className={`fas fa-${aside ? 'times' : 'bars'}`} />
          </button>
        </nav>
      </header>
      <Links aside={aside} setAside={setAside} />
    </>
  )
}

export default Header
