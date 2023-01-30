import { useContext, useEffect, useState } from "react";
import { LodgingContext } from "../contexts/LodgingContext";
import { ILodging } from "../models/ILodging";
import { getLodging, getLodgings } from "../services/getLodgings";

import LodgingDetails from "../components/LodgingDetails/LodgingDetails";
import { useParams } from "react-router-dom";

const Lodging = () => {
  const LodContext = useContext(LodgingContext);
  const [lodging, setLodging] = useState<ILodging>();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    LodContext.lodgings.map((item) => {
      if (id == item.id) {
        setLodging(item);
      }
    });
  }, []);

  if (!lodging) return null;

  return <LodgingDetails lodging={lodging} />;
};

export default Lodging;
