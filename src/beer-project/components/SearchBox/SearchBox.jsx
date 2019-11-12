import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Filters from '../Filters/Filters';

import './SearchBox.scss';

function SearchBox({
  className,
  onSubmit,
  searchText,
  abv,
  ibu,
  ebc,
  filtersVisible,
  setSearchText,
  setAbv,
  setIbu,
  setEbc,
}) {
  const onInputChange = useCallback(
    (e) => {
      setSearchText(e.target.value);
    },
    [setSearchText],
  );

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit],
  );

  return (
    <form className={classNames('search-box', className)} onSubmit={onFormSubmit}>
      <label className="search-box__label">
        <input
          placeholder="Search beers..."
          type="text"
          className="search-box__input"
          value={searchText}
          onChange={onInputChange}
        />
        <button type="submit" className="fas fa-search search-box__icon" />
      </label>

      {filtersVisible && (
        <Filters
          className="search-box__filters"
          abv={abv}
          ibu={ibu}
          ebc={ebc}
          setAbv={setAbv}
          setIbu={setIbu}
          setEbc={setEbc}
        />
      )}
    </form>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setAbv: PropTypes.func.isRequired,
  setIbu: PropTypes.func.isRequired,
  setEbc: PropTypes.func.isRequired,

  className: PropTypes.string,

  searchText: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  ebc: PropTypes.number.isRequired,
  filtersVisible: PropTypes.bool.isRequired,
};

SearchBox.defaultProps = {
  className: '',
};

export default SearchBox;
