import axios from "axios";
import { IAboutInfos } from "../models/IAboutInfos";

export const getAboutInfos = async (): Promise<IAboutInfos[]> => {
  const res = await axios.get<IAboutInfos[]>("/data/aboutInfos.json");
  return res.data;
};
