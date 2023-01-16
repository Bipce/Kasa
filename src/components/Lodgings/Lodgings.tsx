import homeImg from "../../assets/home-img.png";

import "./Lodgings.css";

const Lodgings = () => {
  return (
    <div className="main-wrapper">
      <div className="body">
        <img src={homeImg} alt="home" className="home-img" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
};

export default Lodgings;
