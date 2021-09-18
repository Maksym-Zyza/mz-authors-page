import React from 'react';
import uniqid from 'uniqid';
import css from './MySelect.module.css';

function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <select
      className={css.MySelect}
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map(option => (
        <option key={uniqid()} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default MySelect;
