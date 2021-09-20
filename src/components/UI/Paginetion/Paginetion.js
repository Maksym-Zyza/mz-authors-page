import React from 'react';
import css from './Paginetion.module.scss';

export default function Paginetion({ page, limit, totalPages, changePage }) {
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
        {page + 1 * limit - limit} - {page * limit}
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
