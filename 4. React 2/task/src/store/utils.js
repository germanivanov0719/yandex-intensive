export const prepareData = (items) => {
  return {
    entities: items.reduce((acc, cinema) => {
      acc[cinema.id] = cinema;
      return acc;
    }, {}),
    ids: items.map(({ id }) => id),
  };
};
