import { Link } from "react-router-dom";
import { ILodging } from "../../models/ILodging";

import "./Lodgings.css";
import "./LodgingsQueries.css";

interface IProps {
  lodgings: ILodging[];
}

const Lodgings: React.FC<IProps> = ({ lodgings }) => {
  return (
    <div className="main-wrapper">
      <section className="top-section">
        <figure></figure>
        <p className="slogan">Chez vous, partout et ailleurs</p>
      </section>

      <section className="lodgings-section">
        {lodgings.map((lodging) => {
          return (
            <article key={lodging.id}>
              <Link to={lodging.id}>
                <figure>
                  <img src={lodging.cover} alt={lodging.title} />
                </figure>
                <figcaption>{lodging.title}</figcaption>
              </Link>
            </article>
          );
        })}
        ;
      </section>
    </div>
  );
};

export default Lodgings;
