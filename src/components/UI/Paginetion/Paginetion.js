import React from 'react';
import { usePaginetion } from '../../../hooks/usePaginetion';

export default function Paginetion({ totalPages, page, changePage }) {
  const pagesArray = usePaginetion(totalPages);
  return (
    <div>
      {pagesArray.map(el => (
        <button
          key={el}
          type="button"
          className={page === el ? 'btn_current' : 'btn'}
          onClick={() => changePage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
}
