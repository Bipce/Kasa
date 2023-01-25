import { useEffect, useState } from "react";
import Accordion from "../components/Accordion/Accordion";
import { IAboutInfos } from "../models/IAboutInfos";
import { getAboutInfos } from "../services/getAboutInfos";

import "../components/Accordion/Accordion.css";

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
      <section className="header-about"></section>

      <section>
        <Accordion aboutInfo={aboutInfo} />
      </section>
    </>
  );
};

export default About;
