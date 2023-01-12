import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: localStorage.getItem("token") },
  reducers: {
    setToken(state, action) {
      state.token = action.payload.token;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
