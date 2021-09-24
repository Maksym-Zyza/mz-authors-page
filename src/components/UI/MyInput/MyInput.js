import React from 'react';
import css from './MyInput.module.scss';

const MyInput = React.forwardRef((props, ref) => {
  return (
    <div className={css.inputBlock}>
      <div className={css.svg}></div>
      <input ref={ref} className={css.MyInput} {...props} />
    </div>
  );
});

export default MyInput;
