import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <nav className="footer__nav">
          <ul className="footer__navList">
            <li className="footer__navListItem"><Link to="/" className="footer__navListItemLnk">Home</Link></li>
            <li className="footer__navListItem"><Link to="/works" className="footer__navListItemLnk">Works</Link></li>
            <li className="footer__navListItem"><Link to="/about" className="footer__navListItemLnk">About</Link></li>
            <li className="footer__navListItem">
              {isHome ? (
                <a href="#CONTACT" className="footer__navListItemLnk">Contact</a>
              ) : (
                <Link to="/#CONTACT" className="footer__navListItemLnk">Contact</Link>
              )}
            </li>
          </ul>
        </nav>
        <p className="footer__copyright">&copy; {new Date().getFullYear()} Phoebe's Portfolio Site</p>
        <button className="footer__toTop u-pcDb" onClick={scrollToTop}>
          <svg viewBox="0 0 18.6 11.3">
            <path d="M9.1,1.7L1.8,9"></path>
            <path d="M9.1,1.7L16.4,9"></path>
          </svg>
        </button>
      </div>
    </footer>
  )
}

export default Footer;