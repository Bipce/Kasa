import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/sharp-solid-svg-icons";
import { useState } from "react";
import { IAboutInfos } from "../../models/IAboutInfos";
import "./Accordion.css";

interface IProps {
  aboutInfo: IAboutInfos[];
}

const Accordion: React.FC<IProps> = ({ aboutInfo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="accordion">
        {aboutInfo.map((info, i) => {
          return (
            <div key={info.title} className="info">
              <h2 className="info-title">{info.title}</h2>
              <FontAwesomeIcon icon={faUser} />
              <p className="info-text">{info.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
