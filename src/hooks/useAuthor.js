import { useMemo } from 'react';

export const useSortedAuthors = (authors, sort) => {
  const sortedAuthors = useMemo(() => {
    if (sort) {
      return [...authors].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return authors;
  }, [authors, sort]);

  return sortedAuthors;
};

export const useAuthors = (authors, sort, query) => {
  const sortedAuthors = useSortedAuthors(authors, sort);

  const sortedAndSearchAuthors = useMemo(() => {
    return sortedAuthors.filter(author =>
      author.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, sortedAuthors]);

  return sortedAndSearchAuthors;
};
