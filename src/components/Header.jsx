import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logoWrap">
          <h1 className="header__logo">
            <a href="/">
              <span className="header__logoJob">Junior Frontend Developer</span>
              <span className="header__logoName">Phoebe</span>
            </a>
          </h1>
          <p className="header__tagline u-pcDb">
            This is the portfolio site of Phoebe Jao, a junior frontend developer in the Philippines.
          </p>
        </div>
        <div className="header__inner">
          <nav className="header__nav u-pcDb">
            <ul className="header__navList">
              <li className="header__navListItem"><Link to="/" className="header__navListItemLnk">Home</Link></li>
              <li className="header__navListItem"><Link to="/works" className="header__navListItemLnk">Works</Link></li>
              <li className="header__navListItem"><Link to="/about" className="header__navListItemLnk">About</Link></li>
              <li className="header__navListItem">
                {isHome ? (
                  <a href="#CONTACT" className="header__navListItemLnk">Contact</a>
                ) : (
                  <Link to="/#CONTACT" className="header__navListItemLnk">Contact</Link>
                )}
              </li>
            </ul>
          </nav>
          <button className={`header__btn u-spDb ${isOpen ? "is-open" : ""}`} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">Menu</button>
          <nav className={`header__nav u-spDb ${isOpen ? "is-open" : ""}`}>
            <ul className="header__navList">
              <li className="header__navListItem header__navListItem-01" onClick={() => setIsOpen(false)}><Link to="/" className="header__navListItemLnk">Home</Link></li>
              <li className="header__navListItem header__navListItem-02" onClick={() => setIsOpen(false)}><Link to="/works" className="header__navListItemLnk">Works</Link></li>
              <li className="header__navListItem header__navListItem-03" onClick={() => setIsOpen(false)}><Link to="/about" className="header__navListItemLnk">About</Link></li>
              <li className="header__navListItem  header__navListItem-04">
                {isHome ? (
                  <a href="#CONTACT" className="header__navListItemLnk">Contact</a>
                ) : (
                  <Link to="/#CONTACT" className="header__navListItemLnk">Contact</Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;