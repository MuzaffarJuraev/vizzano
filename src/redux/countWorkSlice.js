import { createSlice } from "@reduxjs/toolkit";

const countWorkSlice = createSlice({
  name: "countWorkSlice",
  initialState: { selectedData: {} },
  reducers: {
    setSelectedData(state, { payload }) {
      state.selectedData = payload;
    },
  },
});

export const { setSelectedData } = countWorkSlice.actions;

export default countWorkSlice.reducer;
