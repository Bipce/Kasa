import { useEffect, useState } from "react";
import Lodgings from "../components/Lodgings/Lodgings";
import { ILodging } from "../models/ILodging";
import { getLodgings } from "../services/getLodgings";

const Home = () => {
  const [lodgings, setLodgings] = useState<ILodging[]>();

  useEffect(() => {
    (async () => {
      setLodgings(await getLodgings());
    })();
  }, []);

  if (!lodgings) return null;

  return <Lodgings lodgings={lodgings} />;
};

export default Home;
