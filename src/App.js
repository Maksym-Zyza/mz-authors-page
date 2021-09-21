import { useState, useEffect } from 'react';
import AuthorsList from './components/AuthorsList/AuthorsList';
import AuthorsFilter from './components/AuthorsFilter/AuthorsFilter';
import Loader from './components/UI/Loader/Loader';
import Paginetion from './components/UI/Paginetion/Paginetion';
import Error from './components/UI/Error/Error';
import { getAuthors } from './API/AuthorsApi';
import { useAuthors } from './hooks/useAuthor';
import { useFeaching } from './hooks/useFeaching';
import { getPagesCount } from './utils/pages';
import { getTopAuthors } from './utils/getTopAuthors';
import { useSortedPaginetion } from './hooks/useSortedPaginetion';
import './styles.scss';

function App() {
  const [authors, setAuthors] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  // FETCH Authors
  const [fetchAuthors, isAuthorsLoading, authorError] = useFeaching(
    async () => {
      const allAuthors = await getAuthors();
      setAuthors(allAuthors);
    },
  );

  // SORTED and SEARCH
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchAuthors = useAuthors(
    authors,
    filter.sort,
    filter.query,
    setPage,
  );

  const totalPages = getPagesCount(sortedAndSearchAuthors, limit);
  const topAuthors = getTopAuthors(authors);

  // PAGINETION
  const sortedAndSearchPaginetion = useSortedPaginetion(
    sortedAndSearchAuthors,
    totalPages,
    limit,
    page,
  );

  // CAHGE PAGE
  const changePage = page => {
    setPage(page);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <div className="App">
      <AuthorsFilter filter={filter} setFilter={setFilter} />

      {isAuthorsLoading ? (
        <Loader />
      ) : sortedAndSearchPaginetion.length ? (
        <>
          <AuthorsList
            page={page}
            limit={limit}
            topAuthors={topAuthors}
            authors={sortedAndSearchPaginetion}
          />
          <Paginetion
            page={page}
            limit={limit}
            totalPages={totalPages}
            changePage={changePage}
            authors={sortedAndSearchPaginetion}
          />
        </>
      ) : (
        <h1 className="nothing">Authors not found!</h1>
      )}

      <Error error={authorError} />
    </div>
  );
}

export default App;
