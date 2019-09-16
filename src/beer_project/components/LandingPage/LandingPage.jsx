import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Map } from 'immutable';

import SearchBox from '../SearchBox/SearchBox';
import VerticalBeerTemplate from '../VerticalBeerTemplate/VerticalBeerTemplate';

import { ITEMS_PER_LANDING_PAGE } from '../../constants';

import './LandingPage.scss';

function LandingPage({
  onMount,
  beers,
  searchText,
  onSearchChange,
  onFavoriteClicked,
  onRemoveFavoriteClicked,
  isIdFavorite,
  abv,
  ibu,
  ebc,
}) {
  const [page, setPage] = useState(1);
  const [currentBeersCount, setCurrentBeersCount] = useState(0);

  const hasMoreItems = !searchText && currentBeersCount !== beers.count();

  const onScroll = () => {
    setCurrentBeersCount(beers.count());

    onMount(page);
    setPage(page + 1);
  };

  useEffect(() => {
    setCurrentBeersCount(0);

    onMount();
    setPage((Math.ceil(beers.count() / ITEMS_PER_LANDING_PAGE) || 1) + 1);
  }, [searchText, abv, ibu, ebc]);

  return (
    <div className="landing-page">
      <SearchBox
        className="landing-page__search-box"
        onSubmit={onSearchChange}
        searchText={searchText}
        abv={abv}
        ibu={ibu}
        ebc={ebc}
      />
      <InfiniteScroll
        className="landing-page__items-container"
        dataLength={currentBeersCount}
        next={onScroll}
        hasMore={hasMoreItems}
      >
        {beers
          .map(item => (
            <VerticalBeerTemplate
              className="landing-page__item"
              key={item.get('id')}
              id={item.get('id')}
              title={item.get('name')}
              tagline={item.get('tagline')}
              image={item.get('image_url')}
              favorite={isIdFavorite(item.get('id'))}
              onFavoriteClicked={onFavoriteClicked}
              onRemoveFavoriteClicked={onRemoveFavoriteClicked}
            />
          ))
          .toList()}
      </InfiniteScroll>
    </div>
  );
}

LandingPage.propTypes = {
  onMount: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onFavoriteClicked: PropTypes.func.isRequired,
  onRemoveFavoriteClicked: PropTypes.func.isRequired,
  isIdFavorite: PropTypes.func.isRequired,

  beers: PropTypes.instanceOf(Map).isRequired,

  searchText: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  ebc: PropTypes.number.isRequired,
};

export default LandingPage;
