import { useState, useEffect } from 'react';
import AuthorsList from './components/AuthorsList/AuthorsList';
import AuthorsFilter from './components/AuthorsFilter/AuthorsFilter';
import Loader from './components/UI/Loader/Loader';
import Paginetion from './components/UI/Paginetion/Paginetion';
import Error from './components/UI/Error/Error';
import { getAll } from './API/AuthorsApi';
import { useAuthors } from './hooks/useAuthor';
import { useFeaching } from './hooks/useFeaching';
import { getPagesCount } from './utils/pages';
import './App.css';

function App() {
  const [authors, setAuthors] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const changePage = page => {
    setPage(page);
    fetchAuthors(limit, page);
  };

  // FETCH Authors
  const [fetchAuthors, isAuthorsLoading, authorError] = useFeaching(
    async (limit, page) => {
      const response = await getAll(limit, page).then(response =>
        response.json(),
      );
      setAuthors(response);

      const totalAuthors = await getAll();
      const totalCount = totalAuthors.headers.get('X-Total-Count');
      setTotalPages(getPagesCount(totalCount, limit));
    },
  );

  useEffect(() => {
    fetchAuthors(limit, page);
  }, []);

  // SORTED and SEARCH
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchAuthors = useAuthors(authors, filter.sort, filter.query);

  return (
    <div className="App">
      <AuthorsFilter filter={filter} setFilter={setFilter} />

      {isAuthorsLoading ? (
        <Loader />
      ) : (
        <AuthorsList authors={sortedAndSearchAuthors} page={page} />
      )}

      <Paginetion totalPages={totalPages} page={page} changePage={changePage} />

      <Error error={authorError} />
    </div>
  );
}

export default App;
