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
