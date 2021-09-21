import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import AuthorItem from '../AuthorItem/AuthorItem';
import css from './AuthorsList.module.scss';

function AuthorsList({ authors, page, limit, topAuthors }) {
  return (
    <div className={css.conteiner}>
      {authors.map((author, index) => (
        <AuthorItem
          key={uniqid()}
          author={author}
          number={page > 1 ? page * limit - limit + index + 1 : index + 1}
          topAuthors={topAuthors}
        />
      ))}
    </div>
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
