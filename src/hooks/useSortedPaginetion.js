import { useMemo } from 'react';

export const useSortedPaginetion = (arr, totalPages, limit, page) => {
  const sortedTotalAuthors = useMemo(() => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
      if (page === 1) {
        result = [...arr.slice(0, limit)];
      } else if (page > 1) {
        result = [...arr.slice(page * limit - limit, page * limit)];
      }
    }
    return result;
  }, [arr, totalPages, limit, page]);
  return sortedTotalAuthors;
};
