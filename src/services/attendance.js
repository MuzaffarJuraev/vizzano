import axios from "axios";
import { getToken, getBaseUrl } from "../utils/globalFunc";
export const requests = {
  getAllsMerchants: ({ idFlow, createDate }) =>
    axios({
      method: "POST",
      url: `${getBaseUrl()}/merchants`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data: {
        flowType: idFlow,
        createDate,
      },
    }),
  updateMerchant: (data) =>
    axios({
      method: "POST",
      url: `${getBaseUrl()}/merchants/update`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data,
    }),

  addMerchant: (data) =>
    axios({
      method: "POST",
      url: `${getBaseUrl()}/merchants/create_user`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data,
    }),

  removeMerchant: (data) =>
    axios({
      method: "POST",
      url: `${getBaseUrl()}/merchants/delete_user`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data,
    }),
};
