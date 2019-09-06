import React from 'react';
import classNames from 'classnames';

import './SearchBox.scss';

function SearchBox({ className }) {
  return (
    <label className={classNames('search-box', className)}>
      <input placeholder="Search beers..." type="text" className="search-box__input" />
      <button type="button" className="fas fa-search search-box__icon" />
    </label>
  );
}

export default SearchBox;
