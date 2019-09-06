import React, { useEffect } from 'react';

import SearchBox from '../SearchBox/SearchBox';
import BeerGrid from '../BeerGrid/BeerGrid';

import './LandingPage.scss';

function LandingPage({
  onMount, beers, searchText, onSearchChange,
}) {
  useEffect(() => {
    onMount();
  }, [searchText]);

  return (
    <div className="landing-page">
      <SearchBox
        className="landing-page__search-box"
        onSubmit={onSearchChange}
        searchText={searchText}
      />
      <BeerGrid className="landing-page__beer-grid" beers={beers} />
    </div>
  );
}

export default LandingPage;
