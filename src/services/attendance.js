import axios from "axios";

export const requests = {
  getAllsMerchants: ({ idFlow, createDate }) =>
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/merchants`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        flowType: idFlow,
        createDate,
      },
    }),
};
