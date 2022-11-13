import { bookSlice } from "./index";
import { prepareData } from "../utils";
import { selectCinemas } from "./selectors";

export const loadBooksIfNotExist = (dispatch, getState) => {
  // if (selectCinemas(getState())?.length > 0) {
  //   return;
  // }

  dispatch(bookSlice.actions.startLoading());
  fetch("http://localhost:3001/api/books")
    .then((response) => response.json())
    .then((books) => {
      dispatch(bookSlice.actions.successLoading(books));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
