import { bookSlice } from "./index";
import { prepareData } from "../utils";
import { selectCinemas } from "./selectors";

export const loadCategoriesIfNotExist = (cinemaId) => (dispatch, getState) => {
  // if (selectCinemas(getState())?.length > 0) {
  //   return;
  // }

  dispatch(bookSlice.actions.startLoading());
  fetch(`http://localhost:3001/api/books?categoryId=${cinemaId}`)
    .then((response) => response.json())
    .then((cinemas) => {
      dispatch(bookSlice.actions.successLoading(prepareData(cinemas)));
    })
    .catch(() => {
      dispatch(bookSlice.actions.failLoading());
    });
};
