import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./category";
import { bookSlice } from "./book";
import { cartSlice } from "./cart";

export const store = configureStore({
  reducer: combineReducers({
    catergory: categorySlice.reducer,
    book: bookSlice.reducer,
    cart: cartSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

console.log(store.getState());
