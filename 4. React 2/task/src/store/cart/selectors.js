export const selectCartModule = (state) => state.cart;

export const selectFilmCount = (state, filmId) =>
  selectCartModule(state)[filmId];
