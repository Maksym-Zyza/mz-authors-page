export const getTopAuthors = arr => {
  const top = [...arr].sort((a, b) => b - a).slice(0, 3);
  return top.map(el => el.pageviews);
};
