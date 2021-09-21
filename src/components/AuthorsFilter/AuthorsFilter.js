import React from 'react';
import PropTypes from 'prop-types';
import MySelect from '../UI/MySelect/MySelect';
import MyInput from '../UI/MyInput/MyInput';
import css from './AuthorsFilter.module.scss';

function AuthorsFilter({ filter, setFilter }) {
  return (
    <div className={css.filter_section}>
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
      <hr />
    </div>
  );
}

AuthorsFilter.propTypes = {
  filter: PropTypes.shape({
    sort: PropTypes.string,
    query: PropTypes.string,
  }).isRequired,
  setFilter: PropTypes.func.isRequired,
  selectedSort: PropTypes.func,
};

export default AuthorsFilter;
