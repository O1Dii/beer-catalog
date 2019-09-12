import React, { useState } from 'react';
import classNames from 'classnames';

import Filters from '../Filters/Filters';

import './SearchBox.scss';

function SearchBox({
  className, onSubmit, searchText, abv, ibu, ebc,
}) {
  const [searchValue, setSearchValue] = useState(searchText);
  const [newAbv, setAbv] = useState(abv);
  const [newIbu, setIbu] = useState(ibu);
  const [newEbc, setEbc] = useState(ebc);

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(searchValue, newAbv, newIbu, newEbc);
    onSubmit(searchValue, newAbv, newIbu, newEbc);
  };

  return (
    <form className={classNames('search-box', className)} onSubmit={onFormSubmit}>
      <label className="search-box__label">
        <input
          placeholder="Search beers..."
          type="text"
          className="search-box__input"
          value={searchValue}
          onChange={onInputChange}
        />
        <button type="submit" className="fas fa-search search-box__icon" />
      </label>

      {searchText && (
        <Filters
          className="search-box__filters"
          abv={newAbv}
          ibu={newIbu}
          ebc={newEbc}
          setAbv={setAbv}
          setIbu={setIbu}
          setEbc={setEbc}
        />
      )}
    </form>
  );
}

export default SearchBox;
