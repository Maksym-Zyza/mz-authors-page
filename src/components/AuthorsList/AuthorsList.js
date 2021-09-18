import React from 'react';
import uniqid from 'uniqid';
import AuthorItem from '../AuthorItem/AuthorItem';
import css from './AuthorsList.module.css';

function AuthorsList({ authors }) {
  if (!authors.length) {
    return <h1 className={css.nothing}>Authors not found!</h1>;
  }

  return (
    <div className={css.conteiner}>
      {authors.map((author, index) => (
        <AuthorItem key={uniqid()} number={index + 1} author={author} />
      ))}
    </div>
  );
}

export default AuthorsList;
