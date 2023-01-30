import { useContext, useEffect, useState } from "react";
import { ILodging } from "../models/ILodging";
import Lodgings from "../components/Lodgings/Lodgings";
import { LodgingContext } from "../contexts/LodgingContext";

const Home = () => {
  const lodgContext = useContext(LodgingContext);
  const [lodgings, setLodgings] = useState<ILodging[]>();

  useEffect(() => {
    setLodgings(lodgContext.lodgings);
  }, []);

  if (!lodgings) return null;

  return <Lodgings lodgings={lodgings} />;
};

export default Home;
