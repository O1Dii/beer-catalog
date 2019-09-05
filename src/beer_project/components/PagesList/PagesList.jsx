import React from 'react';
import classNames from 'classnames';

import './PagesList.scss';

function PagesList({ className }) {
  const pages = [1, 2, 3, 4, 5];

  return (
    <ul className={classNames('pages-list', className)}>
      <li className="pages-list__prev">
        <button type="button">&laquo;</button>
      </li>

      {pages.map(item => (
        <li className="pages-list__item">
          <button type="button">{item}</button>
        </li>
      ))}

      <li className="pages-list__next">
        <button type="button">&raquo;</button>
      </li>
    </ul>
  );
}

export default PagesList;
