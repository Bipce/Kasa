import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ILodging } from "../models/ILodging";
import { getLodgings } from "../services/getLodgings";

interface Props {
  lodgings: ILodging[];
}

export const LodgingContext = createContext<Props>({} as Props);

export const LodgingContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [lodgings, setLodgings] = useState<ILodging[]>();

  useEffect(() => {
    (async () => {
      setLodgings(await getLodgings());
    })();
  }, []);

  if (!lodgings) return null;

  return <LodgingContext.Provider value={{ lodgings }}>{children}</LodgingContext.Provider>;
};
