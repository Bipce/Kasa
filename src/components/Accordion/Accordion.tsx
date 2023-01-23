import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { IAboutInfos } from "../../models/IAboutInfos";
import "./Accordion.css";

interface IProps {
  aboutInfo: IAboutInfos[];
}

const Accordion: React.FC<IProps> = ({ aboutInfo }) => {
  const [isAccordionsOpen, setIsAccorddionsOpen] = useState<Boolean[]>([]);

  return (
    <div>
      <div className="accordion">
        {aboutInfo.map((info, i) => {
          return (
            <div key={info.title} className="info">
              <h2
                className="info-title"
                onClick={() => {
                  const tmp = [...isAccordionsOpen];
                  tmp[i] = !isAccordionsOpen[i];
                  setIsAccorddionsOpen(tmp);
                }}
              >
                {info.title}

                <FontAwesomeIcon
                  icon={isAccordionsOpen[i] ? faChevronUp : faChevronDown}
                />
              </h2>

              {isAccordionsOpen[i] ? (
                <p className="info-text">{info.text}</p>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
