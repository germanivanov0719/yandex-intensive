import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

const initialState = {
  entities: [],
  ids: [],
  status: Statuses.idle,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = Statuses.inProgress;
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.entities = action.payload;
      state.ids = action.payload.map((book) => book.id);
    },
    failLoading: (state) => {
      state.status = Statuses.failed;
    },
  },
});
