import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import defineSlice from "./definationSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    definition: defineSlice,
  },
});
