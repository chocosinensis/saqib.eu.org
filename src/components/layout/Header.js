import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [aside, setAside] = useState(false);
  const [shadow, setShadow] = useState(false);

  return (
    <header>
      <div className="logo">
        <Link to="/" className="design">Saqib</Link>
      </div>
      <nav>
        <button className="bars" onClick={() => setAside(!aside)}>
          <i className={`fas fa-${aside ? 'times' : 'bars'}`}></i>
        </button>
        <ul className={`links ${aside ? 'show' : ''}`}>
          {links.map(([h, n]) => (
            <li key={h}>
              <Link to={h}
                onClick={() => setAside(false)}
              >{n}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

const links = [
  ['/', 'Home'],
  ['/articles', 'Articles'],
  ['/projects', 'Projects']
];

export default Header;
