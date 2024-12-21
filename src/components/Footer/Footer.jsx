import './footer.scss';
import logo from '/logo.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo section */}
        <div className="header__logo">
        <img style={{width: '100px', height: '100px'}} src={logo} alt="logo" />
        <div>
          <h1>NeiraSeguridad</h1>
          <p>Experto en casi todo</p>
        </div>
      </div>
        {/* Copyright section */}
        <div className="footer-copyright">
 
          <p>&copy; 2024 Neira Seguridad. Todos los derechos reservados.</p>
        </div>

        {/* Social icons section */}
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
