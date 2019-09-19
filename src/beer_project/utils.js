import {
  API_URL, MIN_ABV, MIN_IBU, MIN_EBC, ITEMS_PER_LANDING_PAGE,
} from './constants';

export const chooseFunction = (value, resolve, reject) => (...args) => {
  if (value) {
    reject(...args);

    return;
  }

  resolve(...args);
};

export const calculatePagesAmount = (pagesCount, currentPage, pagesVisible) => {
  if (currentPage <= pagesVisible / 2) {
    return 1;
  }

  if (currentPage > pagesCount - Math.floor(pagesVisible / 2)) {
    return pagesCount - pagesVisible + 1;
  }

  return currentPage - Math.floor(pagesVisible / 2);
};

export const getPagesArray = (pagesCount, currentPage, pagesVisible) => {
  const addition = calculatePagesAmount(pagesCount, currentPage, pagesVisible);

  return [...Array(pagesVisible).keys()].map(item => item + addition);
};

// export const sendRequest = (url, request, receive, error) => {
//   request();

//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', url);
//   xhr.send();

//   xhr.onreadystatechange = () => {
//     if (xhr.readyState !== 4) {
//       return;
//     }

//     if (xhr.status !== 200) {
//       error();
//     }

//     receive(xhr.responseText);
//   };
// };

export const sendRequest = (url, request, receive, error) => {
  request();

  fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(json => receive(json))
    .catch(errorMessage => error(errorMessage));
};

export const getUrl = (searchText, abv, ibu, ebc, page) => {
  const searchAbv = Math.max(abv - 0.1, MIN_ABV);
  const searchIbu = Math.max(ibu - 0.1, MIN_IBU);
  const searchEbc = Math.max(ebc - 0.1, MIN_EBC);

  const searchString = searchAbv === MIN_ABV && searchEbc === MIN_EBC && searchIbu === MIN_IBU
    ? `beer_name=${searchText}`
    : `beer_name=${searchText}&abv_gt=${searchAbv}&abv_lt=${abv + 1}&ibu_gt=${searchIbu}`
        + `&ibu_lt=${ibu + 1}&ebc_gt=${searchEbc}&ebc_lt=${ebc + 1}`;

  return `${API_URL}?${
    searchText ? searchString : `page=${page}&per_page=${ITEMS_PER_LANDING_PAGE}`
  }`;
};
