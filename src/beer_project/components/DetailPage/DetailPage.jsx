import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import BeerShortDescription from '../BeerShortDescription/BeerShortDescription';
import Properties from '../Properties/Properties';
import FoodPairing from '../FoodPairing/FoodPairing';
import Brewing from '../Brewing/Brewing';
import Ingredients from '../Ingredients/Ingredients';
import Method from '../Method/Method';

import './DetailPage.scss';

function DetailPage({
  onFavoriteClicked, onRemoveFavoriteClicked, favorite, beer,
}) {
  return (
    <div className="detail-page">
      <BeerShortDescription
        className="detail-page__layout"
        id={beer.get('id')}
        title={beer.get('name')}
        tagline={beer.get('tagline')}
        description={beer.get('description')}
        image={beer.get('image_url') || undefined}
        favorite={favorite}
        onFavoriteClicked={onFavoriteClicked}
        onRemoveFavoriteClicked={onRemoveFavoriteClicked}
      />

      <div className="detail-page__top-details">
        <Properties
          className="detail-page__properties"
          abv={beer.get('abv')}
          ibu={beer.get('ibu')}
          ebc={beer.get('ebc')}
        />

        <FoodPairing className="detail-page__food-pairing" foodPairing={beer.get('food_pairing')} />
      </div>

      <Brewing className="detail-page__brewing" brewing={beer.get('brewers_tips')} />

      <div className="detail-page__bottom-details">
        <Ingredients className="detail-page__ingredients" ingredients={beer.get('ingredients')} />

        <Method className="detail-page__method" method={beer.get('method')} />
      </div>
    </div>
  );
}

DetailPage.propTypes = {
  onFavoriteClicked: PropTypes.func.isRequired,
  onRemoveFavoriteClicked: PropTypes.func.isRequired,

  beer: PropTypes.instanceOf(Map).isRequired,
  favorite: PropTypes.bool.isRequired,
};

export default DetailPage;
