export const selectCategoryModule = (state) => state.category;

export const selectCategories = (state) =>
  Object.values(selectCategoryModule(state).entities);

export const selectCategoryById = (state, categoryId) =>
  selectCategoryModule(state).entities[categoryId];

export const selectCategoriesBookIds = (state, categoryId) =>
  selectCategoryModule(state).entities[categoryId].films;
