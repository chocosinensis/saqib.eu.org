import { Link } from 'react-router-dom'

const links = [
  ['https://github.com/choclacode/saqib.ml', 'github'],
  ['https://twitter.com/choclacode', 'twitter'],
  ['https://youtube.com/channel/UCuxNNDSPkN4MTbyubs9OQfQ', 'youtube'],
  ['https://instagram.com/choclacode', 'instagram'],
  ['https://facebook.com/choclacode', 'facebook'],
]

export const Footer = () => (
  <footer>
    <div className='copyright'>
      <span className='design'>
        &copy; 2021{' '}
        <Link className='hover-link' to='/'>
          Saqib
        </Link>
      </span>
    </div>
    <div className='social'>
      {links.map(([h, n]) => (
        <div key={n}>
          <a href={h} target='_blank'>
            <i className={`fab fa-${n}`}></i>
          </a>
        </div>
      ))}
    </div>
  </footer>
)

export default Footer
