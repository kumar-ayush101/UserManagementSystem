import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer/userSlice.js";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;