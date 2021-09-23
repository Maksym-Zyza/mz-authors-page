import { useState } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import AuthorItem from '../AuthorItem/AuthorItem';
import css from './AuthorsList.module.scss';

function AuthorsList({ authors, page, limit, topAuthors }) {
  // MODAL
  const [showModal, setShowModal] = useState(false);
  const [clickItem, setClickItem] = useState('');
  const toggleModal = () => {
    !showModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
    setShowModal(!showModal);
  };

  const handleAuthor = e => {
    if (e.target.nodeName === 'LI') {
      toggleModal();
      setClickItem(e.target.getAttribute('data-name'));
    }
  };

  return (
    <ul className={css.conteiner} onClick={handleAuthor}>
      {authors.map((author, index) => (
        <AuthorItem
          key={uniqid()}
          author={author}
          number={page > 1 ? page * limit - limit + index + 1 : index + 1}
          topAuthors={topAuthors}
          showModal={showModal}
          clickItem={clickItem}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
}

AuthorsList.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      count_pub: PropTypes.number,
      pageviews: PropTypes.number,
    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  topAuthors: PropTypes.array.isRequired,
};

export default AuthorsList;
