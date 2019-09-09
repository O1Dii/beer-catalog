import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import SearchBox from '../SearchBox/SearchBox';
import VerticalBeerTemplate from '../VerticalBeerTemplate/VerticalBeerTemplate';

import './LandingPage.scss';

function LandingPage({
  onMount,
  beers,
  searchText,
  onSearchChange,
  onFavoriteClicked,
  onRemoveFavoriteClicked,
  isIdFavorite,
}) {
  const [page, setPage] = useState(2);

  useEffect(() => {
    onMount();
  }, [searchText]);

  const onScroll = () => {
    onMount(page);
    setPage(page + 1);
  };

  return (
    <div className="landing-page">
      <SearchBox
        className="landing-page__search-box"
        onSubmit={onSearchChange}
        searchText={searchText}
      />
      <InfiniteScroll
        className="landing-page__items-container"
        dataLength={beers.count()}
        next={onScroll}
        hasMore
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

export default LandingPage;
