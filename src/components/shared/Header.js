import { useState } from 'react';

import { LinkShadow } from './';

const Header = () => {
  const [aside, setAside] = useState(false);
  const [shadow, setShadow] = useState(false);

  return (
    <header>
      <div className="logo">
        <a href="/" className="design">Saqib</a>
      </div>
      <nav>
        <button className="bars" onClick={() => setAside(!aside)}>
          <i className={`fas fa-${aside ? 'times' : 'bars'}`}></i>
        </button>
        <ul className={`links ${aside ? 'show' : ''}`}>
          {links.map(([h, n]) => (
            <li key={h}>
              <a href={h}
                onClick={() => setShadow(true)}
              >{n}</a>
            </li>
          ))}
        </ul>
      </nav>
      {shadow && <LinkShadow onTransitionEnd={() => {
        setShadow(false);
        setAside(false);
      }} />}
    </header>
  );
}

const links = [
  ['#about', 'About'],
  ['#explore', 'Explore'],
  ['#contact', 'Contact']
];

export default Header;
