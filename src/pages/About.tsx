import { useEffect, useState } from "react";
import aboutImg from "../assets/aboutImg.png";
import Accordion from "../components/Accordion/Accordion";
import { IAboutInfos } from "../models/IAboutInfos";
import { getAboutInfos } from "../services/getAboutInfos";

const About = () => {
  const [aboutInfo, setAboutInfo] = useState<IAboutInfos[]>();

  useEffect(() => {
    (async () => {
      setAboutInfo(await getAboutInfos());
    })();
  }, []);

  if (!aboutInfo) return null;

  return (
    <>
      <section className="header-about">
        <figure>
          <img src={aboutImg} alt="about" />
        </figure>
      </section>

      <section>
        <Accordion aboutInfo={aboutInfo} />
      </section>
    </>
  );
};

export default About;
