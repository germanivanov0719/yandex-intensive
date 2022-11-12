import { Statuses } from "../../constants/statuses";

export const selectBookModule = (state) => state.book;

export const selectBook = (state) =>
  Object.values(selectBookModule(state).entities);

export const selectBookById = (state, bookId) =>
  selectBookModule(state).entities[bookId];

export const selectIsBooksLoading = (state) =>
  selectBookModule(state).status === Statuses.inProgress;
