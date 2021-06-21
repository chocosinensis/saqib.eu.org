import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Links } from './'
import { useScroll } from '../../hooks'

export const Header = () => {
  const [aside, setAside] = useState(false)
  const [top] = useScroll(0, -70)

  return (
    <>
      <header style={{ top }}>
        <div className='logo'>
          <Link to='/' className='design'>
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
