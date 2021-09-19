export const getPagesCount = (arr, limit) => {
  const totalCount = arr.length;
  return Math.ceil(totalCount / limit);
};
