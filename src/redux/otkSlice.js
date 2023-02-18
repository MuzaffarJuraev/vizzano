import { createSlice } from "@reduxjs/toolkit";

const otkSlice = createSlice({
  name: "otkSlice",
  initialState: { selectedData: {} },
  reducers: {
    setSelectedData(state, { payload }) {
      state.selectedData = payload;
    },
  },
});

export const { setSelectedData } = otkSlice.actions;

export default otkSlice.reducer;
