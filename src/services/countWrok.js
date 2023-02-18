import axios from "axios";
import { getBaseUrl, getToken } from "../utils/globalFunc";
export const requests = {
  getCountWork: (data) =>
    axios({
      method: "POST",
      url: `${getBaseUrl()}/merchants`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data,
    }),
  updateCountWork: (data) =>
    axios({
      method: "POST",
      url: `${getBaseUrl()}/merchants/update`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data,
    }),
};
