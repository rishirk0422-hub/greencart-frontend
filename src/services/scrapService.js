import API from "./api";

export const createScrap = (data) => {
  return API.post("/scrap", data);
};