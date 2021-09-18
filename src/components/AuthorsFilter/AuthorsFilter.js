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
        placeholder="Поиск автора по имени"
      />
      <MySelect
        defaultValue="Сортировка"
        options={[
          { value: 'name', name: 'По имени' },
          { value: 'count_pub', name: 'По публикациях' },
          { value: 'pageviews', name: 'По просмотрах' },
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
