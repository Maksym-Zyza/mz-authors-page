import React from 'react';
import uniqid from 'uniqid';
import AuthorItem from '../AuthorItem/AuthorItem';
import css from './AuthorsList.module.css';

function AuthorsList({ authors, page }) {
  if (!authors.length) {
    return <h1 className={css.nothing}>Authors not found!</h1>;
  }

  return (
    <div className={css.conteiner}>
      {authors.map((author, index) => (
        <AuthorItem
          key={uniqid()}
          author={author}
          number={page > 1 ? page * 10 - 10 + index + 1 : index + 1}
        />
      ))}
    </div>
  );
}

export default AuthorsList;
