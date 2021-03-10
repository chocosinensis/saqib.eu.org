import { Link } from 'react-router-dom';

const Links = ({ aside, setAside }) => (
  <ul className={`links ${aside ? 'show' : ''}`}>
    {links.map(([h, n], i) => (
      <li key={h} style={{ transitionDelay: `${0.2 * (i + 1)}s` }}>
        <Link to={h}
          onClick={() => setAside(false)}
        >{n}</Link>
      </li>
    ))}
  </ul>
);

const links = [
  ['/', 'Home'],
  ['/articles', 'Articles'],
  ['/projects', 'Projects']
];

export default Links;