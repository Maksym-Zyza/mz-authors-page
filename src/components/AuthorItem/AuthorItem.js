import React from 'react';
// import MyButton from "../UI/MyButton/MyButton";
import css from './AuthorItem.module.css';

const AuthorItem = ({ author, number }) => {
  return (
    <div>
      <div className={css.author}>
        <div className={css.author_content}>
          <strong>
            {number}. {author.name}
          </strong>
          <div>{author.count_pub} публ.</div>
        </div>
        <strong className={css.author_pageviews}>{author.pageviews}</strong>
      </div>
    </div>
  );
};

export default AuthorItem;
