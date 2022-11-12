import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cinemaSlice } from "./cinema";
import { filmSlice } from "./film";
import { cartSlice } from "./cart";

export const store = configureStore({
  reducer: combineReducers({
    cinema: cinemaSlice.reducer,
    film: filmSlice.reducer,
    cart: cartSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

console.log(store.getState());
