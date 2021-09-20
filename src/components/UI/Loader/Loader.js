import React from 'react';
import css from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={css.loader_div}>
      <div className={css.loader}></div>
    </div>
  );
}
