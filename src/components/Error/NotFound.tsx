import { Link } from "react-router-dom";

import "./NotFound.css";
import "./NotFoundQueries.css";

const NotFound = () => {
  return (
    <div className="error-box primary-color">
      <p className="error-code">404</p>
      <p className="error-sentence">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error-link primary-color">
        <p>Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
};

export default NotFound;
