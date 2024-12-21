import  { useState } from 'react';
import './header.scss';
import logo from '/logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img style={{width: '100px', height: '100px'}} src={logo} alt="logo" />
        <div>
          <h1>NeiraSeguridad</h1>
          <p>Experto en casi todo</p>
        </div>
      </div>
      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#empresa">LA EMPRESA</a></li>
          <li><a href="#servicios">SERVICIOS</a></li>
          <li><a href="#normativas">NORMATIVAS</a></li>
          <li><a href="#contacto">CONTACTO</a></li>
        </ul>
      </nav>
      <div className="header__menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
