import React from 'react';

const Filter = ({ onChange, value }) => (
  <label>
    Find contacts by name
    <input onChange={onChange} value={value} name="filter" />
  </label>
);

export default Filter;
