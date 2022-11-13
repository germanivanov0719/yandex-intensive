import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./book";
import { cartSlice } from "./cart";
import { categorySlice } from "./category";

export const store = configureStore({
  reducer: combineReducers({
    category: categorySlice.reducer,
    book: bookSlice.reducer,
    cart: cartSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
