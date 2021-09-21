import React from 'react';
import PropTypes from 'prop-types';
import { Goold, Silver, Bronze } from '../../img/medal';
import css from './AuthorItem.module.scss';

const AuthorItem = ({ author, number, topAuthors }) => {
  return (
    <div className={number % 2 === 0 ? css.author_color : css.author}>
      <strong className={css.number}>{number}.</strong>
      <span
        className={css.img}
        style={{
          background:
            '#' +
            (Math.random().toString(16) + '000000')
              .substring(2, 8)
              .toUpperCase(),
        }}
      >
        {author.name.slice(0, 1)}
      </span>

      <div className={css.author_content}>
        <div className={css.name}>{author.name}</div>
        <div>{author.count_pub} публ.</div>
      </div>

      <div>
        <span className={css.medal}>
          {author.pageviews === topAuthors[0] && <Goold />}
        </span>
        <span className={css.medal}>
          {author.pageviews === topAuthors[1] && <Silver />}
        </span>
        <span className={css.medal}>
          {author.pageviews === topAuthors[2] && <Bronze />}
        </span>
      </div>

      <strong className={css.author_pageviews}>{author.pageviews}</strong>
    </div>
  );
};

AuthorItem.propTypes = {
  authors: PropTypes.shape({
    name: PropTypes.string,
    count_pub: PropTypes.number,
    pageviews: PropTypes.number,
  }),
  number: PropTypes.number.isRequired,
  topAuthors: PropTypes.array.isRequired,
};

export default AuthorItem;
