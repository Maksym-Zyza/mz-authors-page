import { useState, useEffect } from 'react';
import AuthorsList from './components/AuthorsList/AuthorsList';
// import MyModal from './components/UI/MyModal/MyModal';
// import MyButton from './components/UI/MyButton/MyButton';
import AuthorsFilter from './components/AuthorsFilter/AuthorsFilter';
import Loader from './components/UI/Loader/Loader';
import getAll from './API/AuthorsApi';
import { useAuthors } from './hooks/useAuthor';
import { useFeaching } from './hooks/useFeaching';
import './App.css';

function App() {
  const [authors, setAuthors] = useState([]);

  // FETCH Authors
  const [fetchAuthors, isAuthorsLoading, authorError] = useFeaching(
    async () => {
      const authors = await getAll();
      console.log(authors);
      setAuthors(authors);
    },
  );

  useEffect(() => {
    fetchAuthors();
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
        <AuthorsList
          // authors={authors}
          authors={sortedAndSearchAuthors}
        />
      )}

      {authorError && <h3 className="error"> Error: {authorError}</h3>}
    </div>
  );
}

export default App;
