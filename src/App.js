import { useState, useEffect } from 'react';
import AuthorsList from './components/AuthorsList/AuthorsList';
// import MyModal from './components/UI/MyModal/MyModal';
// import MyButton from './components/UI/MyButton/MyButton';
import AuthorsFilter from './components/AuthorsFilter/AuthorsFilter';
import Loader from './components/UI/Loader/Loader';
import { getAll } from './API/AuthorsApi';
import { useAuthors } from './hooks/useAuthor';
import { useFeaching } from './hooks/useFeaching';
import { usePaginetion } from './hooks/usePaginetion';
import { getPagesCount } from './utils/pages';
import './App.css';

function App() {
  const [authors, setAuthors] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const pagesArray = usePaginetion(totalPages);
  const changePage = page => {
    setPage(page);
  };

  // FETCH Authors
  const [fetchAuthors, isAuthorsLoading, authorError] = useFeaching(
    async () => {
      const response = await getAll(limit, page).then(response =>
        response.json(),
      );
      const totalAuthors = await getAll();
      const totalCount = totalAuthors.headers.get('X-Total-Count');
      setTotalPages(getPagesCount(totalCount, limit));
      setAuthors(response);
    },
  );

  useEffect(() => {
    fetchAuthors();
  }, [page]);

  // SORTED and SEARCH
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchAuthors = useAuthors(authors, filter.sort, filter.query);

  return (
    <div className="App">
      <AuthorsFilter filter={filter} setFilter={setFilter} />

      {isAuthorsLoading ? (
        <Loader />
      ) : (
        <AuthorsList authors={sortedAndSearchAuthors} />
      )}

      {pagesArray.map(el => (
        <button
          key={el}
          className={page === el ? 'btn_current' : 'btn'}
          onClick={() => changePage(el)}
        >
          {el}
        </button>
      ))}

      {authorError && (
        <div>
          <h3 className="error">
            Oops, something went wrong. Please try again later.
          </h3>
          <p className="error">Error: {authorError}</p>
        </div>
      )}
    </div>
  );
}

export default App;
