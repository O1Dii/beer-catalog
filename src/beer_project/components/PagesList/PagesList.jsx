import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { getPagesArray } from '../../utils';

import './PagesList.scss';

function PagesList({ className, pagesCount, currentPage }) {
  const pagesVisible = pagesCount > 5 ? 5 : pagesCount;

  const pages = getPagesArray(pagesCount, currentPage, pagesVisible);

  return (
    <ul className={classNames('pages-list', className)}>
      <li
        className={classNames('pages-list__prev', {
          'pages-list__prev_disabled': currentPage <= 1,
        })}
      >
        <Link to={`/favorites/${+currentPage - 1}/`}>
          <button type="button">&laquo;</button>
        </Link>
      </li>

      {pages.map(item => (
        <li className="pages-list__item">
          <Link to={`/favorites/${item}/`}>
            <button type="button">{item}</button>
          </Link>
        </li>
      ))}

      <li
        className={classNames('pages-list__next', {
          'pages-list__next_disabled': currentPage >= pagesCount,
        })}
      >
        <Link to={`/favorites/${+currentPage + 1}/`}>
          <button type="button">&raquo;</button>
        </Link>
      </li>
    </ul>
  );
}

export default PagesList;
