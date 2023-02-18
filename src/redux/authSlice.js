import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../utils/globalFunc";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: getToken() },
  reducers: {
    setToken(state, action) {
      state.token = action.payload.token;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
