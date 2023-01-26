import logoFooter from "../../assets/logoFooter.png";

import "./Footer.css";
import "./FooterQueries.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="logo" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
