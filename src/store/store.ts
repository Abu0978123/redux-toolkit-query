import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "../components/features/studentSlice";


const store = configureStore({
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
});

export default store;