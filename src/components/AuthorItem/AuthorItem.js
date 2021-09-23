import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/UI/Modal/Modal';
import { Goold, Silver, Bronze } from '../../img/medal';
import css from './AuthorItem.module.scss';

const AuthorItem = ({
  author,
  number,
  topAuthors,
  showModal,
  clickItem,
  toggleModal,
}) => {
  return (
    <li
      className={number % 2 === 0 ? css.author_color : css.author}
      data-name={author.name}
    >
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
        <div className={css.author_name}>{author.name}</div>
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

      {showModal && clickItem === author.name && (
        <Modal onClose={toggleModal}>
          <div className={css.modal_block}>
            <strong className={css.name}>{author.name}</strong>
            <div className={css.count_pub}>
              Публикаций:
              <strong> {author.count_pub}</strong>
            </div>
            <div className={css.pageviews}>
              Просмотров:
              <strong> {author.pageviews}</strong>
            </div>
            <strong> Description</strong>
            <p className={css.description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              quidem delectus fuga facilis cupiditate repellendus placeat ipsa
              amet, necessitatibus deserunt? Officiis esse repellat ipsam fugiat
              nihil natus aut debitis. Deserunt?
            </p>
          </div>
        </Modal>
      )}
    </li>
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
  showModal: PropTypes.bool.isRequired,
  clickItem: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default AuthorItem;
