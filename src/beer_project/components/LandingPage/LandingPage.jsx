import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import BeerGrid from '../BeerGrid/BeerGrid';

import './LandingPage.scss';
import Filters from '../Filters/Filters';

function LandingPage() {
  return (
    <div className="landing-page">
      <SearchBox className="landing-page__search-box" />
      <Filters className="landing-page__filters" />
      <BeerGrid className="landing-page__beer-grid" />
    </div>
  );
}

export default LandingPage;
