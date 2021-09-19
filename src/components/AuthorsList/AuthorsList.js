import React from 'react';
import uniqid from 'uniqid';
import AuthorItem from '../AuthorItem/AuthorItem';
import css from './AuthorsList.module.css';

function AuthorsList({ authors, page, limit }) {
  return (
    <div className={css.conteiner}>
      {authors.map((author, index) => (
        <AuthorItem
          key={uniqid()}
          author={author}
          number={page > 1 ? page * limit - limit + index + 1 : index + 1}
        />
      ))}
    </div>
  );
}

export default AuthorsList;
