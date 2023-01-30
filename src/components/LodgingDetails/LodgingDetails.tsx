import { ILodging } from "../../models/ILodging";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LodgingDetails.css";

interface IProps {
  lodging: ILodging;
}

const LodgingDetails: React.FC<IProps> = ({ lodging }) => {
  const starRating = (filled: boolean) => {
    return <FontAwesomeIcon icon={faStar} style={{ color: filled ? "orange" : "lightgray" }}></FontAwesomeIcon>;
  };

  return (
    <section className="lodging-detail-box">
      <Carousel
        className="relative"
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="button button-prev">
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="button button-next">
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </button>
          )
        }
      >
        {lodging.pictures.map((picture) => {
          return <img src={picture} alt={lodging.title} key={lodging.id} className="lodging-detail-box__image" />;
        })}
      </Carousel>

      <div className="lodging-detail-box__info">
        <div>
          <h2 className="primary-color">{lodging.title}</h2>
          <p className="primary-color">{lodging.location}</p>
        </div>

        <div className="tags-box">
          {lodging.tags.map((tag) => {
            return (
              <p key={tag} className="bkg-primary">
                {tag}
              </p>
            );
          })}
        </div>

        <div className="rate-host primary-color">
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default LodgingDetails;
