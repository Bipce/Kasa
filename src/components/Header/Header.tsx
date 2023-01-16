import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="primary-color link">
          <li className="home-link">
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
      </div>
    </>
  );
};

export default Header;
