import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ onChange, value }) => (
  <label>
    Find contacts by name
    <input
      className={styles.filter__input}
      onChange={onChange}
      value={value}
      name="filter"
    />
  </label>
);

export default Filter;
