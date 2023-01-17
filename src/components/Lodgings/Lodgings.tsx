import { Link } from "react-router-dom";
import homeImg from "../../assets/home-img.png";
import { ILodging } from "../../models/ILodging";

import "./Lodgings.css";

interface IProps {
  lodgings: ILodging[];
}

const Lodgings: React.FC<IProps> = ({ lodgings }) => {
  return (
    <div className="main-wrapper">
      <section className="top-section">
        <img src={homeImg} alt="home" className="home-img" />
        <p className="slogan">Chez vous, partout et ailleurs</p>
      </section>

      <section className="lodgings-section">
        {lodgings.map((lodging) => {
          return (
            <article key={lodging.id}>
              <figure>
                <Link to={lodging.id}>
                  <img src={lodging.cover} alt={lodging.title} />
                </Link>
              </figure>
              <figcaption>{lodging.title}</figcaption>
            </article>
          );
        })}
        ;
      </section>
    </div>
  );
};

export default Lodgings;
