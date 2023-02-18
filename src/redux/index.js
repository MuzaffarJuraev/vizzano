import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import otkSlice from "./otkSlice";
import countWorkSlice from "./countWorkSlice";
export default configureStore({
  reducer: {
    auth: authSlice,
    otk: otkSlice,
    countWork: countWorkSlice,
  },
});
