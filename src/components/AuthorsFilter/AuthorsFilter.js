import React from 'react';
import MySelect from '../UI/MySelect/MySelect';
import MyInput from '../UI/MyInput/MyInput';
import css from './AuthorsFilter.module.css';

function AuthorsFilter({ filter, setFilter }) {
  return (
    <div className={css.filter_section}>
      <hr style={{ margin: '15px 0' }} />
      <MyInput
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search..."
      />
      <MySelect
        defaultValue="Sort"
        options={[
          { value: 'name', name: 'Name' },
          { value: 'pageviews', name: 'Pageviews' },
        ]}
        value={filter.sort}
        onChange={selectedSort => {
          setFilter({ ...filter, sort: selectedSort });
        }}
      />
    </div>
  );
}

export default AuthorsFilter;
