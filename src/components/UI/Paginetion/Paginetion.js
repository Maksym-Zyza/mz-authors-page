import React from 'react';
import PropTypes from 'prop-types';
import css from './Paginetion.module.scss';

export default function Paginetion({
  page,
  limit,
  totalPages,
  changePage,
  authors,
}) {
  return (
    <div className={css.paginetion}>
      {page > 1 && (
        <button
          type="button"
          className={css.left}
          onClick={() => changePage(page - 1)}
        >
          &lt;
        </button>
      )}
      <div className={css.pages}>
        {page * limit + 1 - limit} -{' '}
        {authors.length < 10
          ? page * limit + authors.length - limit
          : page * limit}
      </div>
      {page < totalPages && (
        <button
          type="button"
          className={css.right}
          onClick={() => changePage(page + 1)}
        >
          &gt;
        </button>
      )}
    </div>
  );
}

Paginetion.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      count_pub: PropTypes.number,
      pageviews: PropTypes.number,
    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};
