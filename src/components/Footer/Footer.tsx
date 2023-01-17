import logoFooter from "../../assets/logoFooter.png";

import "./Footer.css";
import "./FooterQueries.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logoFooter} alt="logo" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
