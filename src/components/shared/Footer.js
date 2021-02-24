const Footer = () => (
  <footer>
    <div className="copyright">
      <span className="design">
        &copy; 2021 <a className="hover-link" href="/">Saqib</a>
      </span>
    </div>
    <div className="social">
      {links.map(({ href, name }, i) => (
        <div key={i}>
          <a href={href} target="_blank">
            <i className={`fab fa-${name}`}></i>
          </a>
        </div>
      ))}
    </div>
  </footer>
);

const links = [
  { href: 'https://github.com/choclacode/saqib.ml', name: 'github' },
  { href: 'https://twitter.com/choclacode', name: 'twitter' },
  { href: 'https://youtube.com/channel/UCuxNNDSPkN4MTbyubs9OQfQ', name: 'youtube' },
  { href: 'https://instagram.com/choclacode', name: 'instagram' },
  { href: 'https://facebook.com/choclacode', name: 'facebook' }
];

export default Footer;
