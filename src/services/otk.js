import axios from "axios";
import { getBaseUrl, getToken } from "../utils/globalFunc";

export const requests = {
  getOtk: (data) =>
    axios({
      method: "POST",
      url: `${getBaseUrl()}/otks`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data,
    }),

  removeOtk: (data) =>
    axios({
      method: "POST",
      url: `${getBaseUrl()}/otk/remove`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data,
    }),
  addOtk: (data) =>
    axios({
      method: "POST",
      url: `${getBaseUrl()}/otk/add_otk_product`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data,
    }),
  updateOtk: (data) =>
    axios({
      method: "POST",
      url: `${getBaseUrl()}/otk/update`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data,
    }),
};
