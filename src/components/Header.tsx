import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <ul>
        <li>ACCUEIL</li>
        <li>A PROPOS</li>
      </ul>
    </>
  );
};

export default Header;
