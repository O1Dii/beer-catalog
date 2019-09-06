import React, { useState } from 'react';
import classNames from 'classnames';

import Filters from '../Filters/Filters';

import './SearchBox.scss';

function SearchBox({ className, onSubmit, searchText }) {
  const [value, setValue] = useState(searchText);

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form className={classNames('search-box', className)} onSubmit={onFormSubmit}>
      <label className="search-box__label">
        <input
          placeholder="Search beers..."
          type="text"
          className="search-box__input"
          value={value}
          onChange={onInputChange}
        />
        <button type="submit" className="fas fa-search search-box__icon" />
      </label>

      {searchText && <Filters className="search-box__filters" />}
    </form>
  );
}

export default SearchBox;
