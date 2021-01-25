import { useState } from 'react';

const Navbar = () => {
  const [aside, setAside] = useState(false);

  return (
    <nav className="top-nav">
      <div className="logo">
        <a href="/" className="design">Saqib</a>
      </div>
      <button className="bars" onClick={() => setAside(!aside)}>
        <i className={`fas fa-${aside ? 'times' : 'bars'}`}></i>
      </button>
      <ul className={`links ${aside ? 'show' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
