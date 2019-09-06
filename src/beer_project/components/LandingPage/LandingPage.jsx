import React, { useEffect } from 'react';

import SearchBox from '../SearchBox/SearchBox';
import Filters from '../Filters/Filters';

import BeerGrid from '../../containers/BeerGrid';

import './LandingPage.scss';

function LandingPage({ onMount }) {
  useEffect(() => {
    onMount();
  });

  return (
    <div className="landing-page">
      <SearchBox className="landing-page__search-box" />
      {/* <Filters className="landing-page__filters" /> */}
      <BeerGrid className="landing-page__beer-grid" />
    </div>
  );
}

export default LandingPage;
