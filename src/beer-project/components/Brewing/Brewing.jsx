import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Brewing.scss';

function Brewing({ className, brewing }) {
  return (
    <div className={classNames('brewing', className)}>
      <p className="brewing__title">Brewing</p>
      <p className="brewing__description">{brewing}</p>
    </div>
  );
}

Brewing.propTypes = {
  className: PropTypes.string,

  brewing: PropTypes.string.isRequired,
};

Brewing.defaultProps = {
  className: '',
};

export default Brewing;
