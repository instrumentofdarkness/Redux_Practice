// store here

import { configureStore } from "@reduxjs/toolkit";
import productList from "./slices/productSlice";

const store = configureStore({
  reducer: {
    productList,
  },
});

export default store;
