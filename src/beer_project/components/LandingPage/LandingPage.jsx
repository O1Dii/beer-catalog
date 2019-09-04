import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchBox from '../SearchBox/SearchBox';
import BeerGrid from '../BeerGrid/BeerGrid';

import './LandingPage.scss';

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar className="landing-page__navbar" />
      <SearchBox className="landing-page__search-box" />
      <BeerGrid className="landing-page__beer-grid" />
    </div>
  );
}

export default LandingPage;
