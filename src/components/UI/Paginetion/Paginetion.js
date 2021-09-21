import React from 'react';
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
