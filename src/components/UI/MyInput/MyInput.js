import React from 'react';
import css from './MyInput.module.scss';

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={css.MyInput} {...props} />;
});

export default MyInput;
