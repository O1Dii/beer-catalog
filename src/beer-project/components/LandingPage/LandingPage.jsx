import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Map } from 'immutable';

import SearchBox from '../SearchBox/SearchBox';
import VerticalBeerTemplate from '../../containers/VerticalBeerTemplate';

import './LandingPage.scss';
import { ITEMS_PER_LANDING_PAGE } from '../../constants';

function LandingPage({
  loadBeersConsecutive,
  loadBeersWithReplacement,
  beers,
  hasMoreItems,
  searchText,
  onFavoriteClicked,
  onRemoveFavoriteClicked,
  abv,
  ibu,
  ebc,
  filtersVisible,
  setSearchText,
  setAbv,
  setIbu,
  setEbc,
  isLoading,
}) {
  const onScroll = useCallback(() => {
    loadBeersConsecutive();
  }, [loadBeersConsecutive]);

  useEffect(() => {
    if (beers.count() < ITEMS_PER_LANDING_PAGE) {
      loadBeersConsecutive();
    }
  }, []);

  return (
    <div className="landing-page">
      <SearchBox
        className="landing-page__search-box"
        onSubmit={loadBeersWithReplacement}
        searchText={searchText}
        abv={abv}
        ibu={ibu}
        ebc={ebc}
        filtersVisible={filtersVisible}
        setSearchText={setSearchText}
        setAbv={setAbv}
        setIbu={setIbu}
        setEbc={setEbc}
      />
      {!isLoading && beers.isEmpty() && (
        <p className="landing-page__nothing-found-title">Nothing found</p>
      )}
      <InfiniteScroll
        className="landing-page__items-container"
        dataLength={beers.count()}
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
              image={item.get('image_url') || undefined}
              onFavoriteClicked={onFavoriteClicked}
              onRemoveFavoriteClicked={onRemoveFavoriteClicked}
            />
          ))
          .toList()}
      </InfiniteScroll>

      {isLoading && <i className="landing-page__loading-spinner fas fa-spinner fa-spin" />}
    </div>
  );
}

LandingPage.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  setAbv: PropTypes.func.isRequired,
  setIbu: PropTypes.func.isRequired,
  setEbc: PropTypes.func.isRequired,
  loadBeersConsecutive: PropTypes.func.isRequired,
  loadBeersWithReplacement: PropTypes.func.isRequired,
  onFavoriteClicked: PropTypes.func.isRequired,
  onRemoveFavoriteClicked: PropTypes.func.isRequired,

  beers: PropTypes.instanceOf(Map).isRequired,

  hasMoreItems: PropTypes.bool.isRequired,
  searchText: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  ebc: PropTypes.number.isRequired,
  filtersVisible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LandingPage;
