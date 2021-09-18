import { useMemo } from 'react';

export const useSortedAuthors = (authors, sort) => {
  const sortedAuthors = useMemo(() => {
    if (sort === 'name') {
      return [...authors].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else if (sort === 'pageviews' || sort === 'count_pub') {
      return [...authors].sort((a, b) => b[sort] - a[sort]);
    }
    return authors;
  }, [authors, sort]);

  return sortedAuthors;
};

export const useAuthors = (authors, sort, query) => {
  const sortedAuthors = useSortedAuthors(authors, sort);

  const sortedAndSearchAuthors = useMemo(() => {
    let filteredAuthors = [];
    if (sortedAuthors.length > 0) {
      filteredAuthors = sortedAuthors.filter(author =>
        author.name.toLowerCase().includes(query.toLowerCase()),
      );
    }
    return filteredAuthors;
  }, [query, sortedAuthors]);

  return sortedAndSearchAuthors;
};
