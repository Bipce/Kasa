import axios from "axios";
import { ILodging } from "../models/ILodging";

export const getLodgings = async (): Promise<ILodging[]> => {
  const res = await axios.get<ILodging[]>("/data/logements.json");
  return res.data;
};
