import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import BeerGrid from '../BeerGrid/BeerGrid';

import './LandingPage.scss';

function LandingPage() {
  return (
    <div className="landing-page">
      <SearchBox className="landing-page__search-box" />
      <BeerGrid className="landing-page__beer-grid" />
    </div>
  );
}

export default LandingPage;
