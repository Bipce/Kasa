import axios from "axios";
import { ILodging } from "../models/ILodging";

export const getLodgings = async (): Promise<ILodging[]> => {
  const res = await axios.get<ILodging[]>("/data/logements.json");
  return res.data;
};

export const getLodging = async (lodgingId: string): Promise<ILodging> => {
  const res = await axios.get<ILodging>(`${lodgingId}`);
  return res.data;
};
