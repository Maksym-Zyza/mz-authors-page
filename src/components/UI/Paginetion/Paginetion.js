import React from 'react';

export default function Paginetion({ page, limit, totalPages, changePage }) {
  return (
    <div>
      {page > 1 && (
        <button
          type="button"
          className="btn"
          onClick={() => changePage(page - 1)}
        >
          &lt;
        </button>
      )}
      <span className="btn">
        {page + 1 * limit - limit} - {page * limit}
      </span>
      {page < totalPages && (
        <button
          type="button"
          className="btn"
          onClick={() => changePage(page + 1)}
        >
          &gt;
        </button>
      )}
    </div>
  );
}
