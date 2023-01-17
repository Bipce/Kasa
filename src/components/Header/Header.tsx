import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import "./Header.css";
import "./HeaderQueries.css";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="primary-color link">
          <li>
            <Link to="/" className="primary-color">
              ACCUEIL
            </Link>
          </li>
          <li>
            <Link to="/about" className="primary-color">
              A PROPOS
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
