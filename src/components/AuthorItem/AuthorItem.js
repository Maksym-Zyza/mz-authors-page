import React from 'react';
import css from './AuthorItem.module.css';

const AuthorItem = ({ author, number, topAuthors }) => {
  return (
    <div>
      <div className={css.author}>
        <div className={css.author_content}>
          <strong>
            {number}. {author.name}
          </strong>
          <div>{author.count_pub} публ.</div>
        </div>
        <span>{author.pageviews === topAuthors[0] && 111}</span>
        <span>{author.pageviews === topAuthors[1] && 222}</span>
        <span>{author.pageviews === topAuthors[2] && 333}</span>
        <strong className={css.author_pageviews}>{author.pageviews}</strong>
      </div>
    </div>
  );
};

export default AuthorItem;
