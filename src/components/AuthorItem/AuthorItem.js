import React from 'react';
import { Goold, Silver, Bronze } from '../../img/medal';
import css from './AuthorItem.module.scss';

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
        <span className={css.medal}>
          {author.pageviews === topAuthors[0] && <Goold />}
        </span>
        <span className={css.medal}>
          {author.pageviews === topAuthors[1] && <Silver />}
        </span>
        <span className={css.medal}>
          {author.pageviews === topAuthors[2] && <Bronze />}
        </span>
        <strong className={css.author_pageviews}>{author.pageviews}</strong>
      </div>
    </div>
  );
};

export default AuthorItem;
