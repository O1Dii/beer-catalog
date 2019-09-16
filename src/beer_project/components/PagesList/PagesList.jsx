import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { getPagesArray } from '../../utils';
import { VISIBLE_PAGES } from '../../constants';

import './PagesList.scss';

function PagesList({ className, pagesCount, currentPage }) {
  const pagesVisible = pagesCount > VISIBLE_PAGES ? VISIBLE_PAGES : pagesCount;

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
        <li key={item} className="pages-list__item">
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

PagesList.propTypes = {
  className: PropTypes.string,
  pagesCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

PagesList.defaultProps = {
  className: '',
};

export default PagesList;
