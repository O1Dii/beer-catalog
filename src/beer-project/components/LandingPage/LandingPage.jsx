import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Map } from 'immutable';

import SearchBox from '../SearchBox/SearchBox';
import VerticalBeerTemplate from '../../containers/VerticalBeerTemplate';

import './LandingPage.scss';

function LandingPage({
  loadBeersConsecutive,
  loadBeersWithReplacement,
  beers,
  currentPage,
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
  loading,
}) {
  const onScroll = useCallback(() => {
    loadBeersConsecutive(currentPage);
  }, [loadBeersConsecutive, currentPage]);

  useEffect(() => {
    if (beers.isEmpty()) {
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
      {!loading && beers.isEmpty() && (
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

      {loading && <i className="landing-page__loading-spinner fas fa-asterisk" />}
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
  currentPage: PropTypes.number.isRequired,
  searchText: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  ebc: PropTypes.number.isRequired,
  filtersVisible: PropTypes.bool.isRequired,
};

export default LandingPage;
