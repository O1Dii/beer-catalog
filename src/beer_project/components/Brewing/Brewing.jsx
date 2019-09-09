import React from 'react';
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

export default Brewing;
