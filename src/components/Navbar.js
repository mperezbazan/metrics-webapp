import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="header-container">
    <nav className="header-nav">
      <div className="header-list">
        <li className="header-item">
          <Link to="/">
            {'<'}
          </Link>
        </li>
        <li className="header-item">
          Country views
        </li>
        <li className="header-item">
          <div className="button-group">
            <i className="fa-solid fa-microphone" />
            <i className="fa-solid fa-gear" />
          </div>
        </li>
      </div>
    </nav>
  </header>
);

export default Navbar;
