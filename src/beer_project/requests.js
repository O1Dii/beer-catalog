export const GET = (baseUrl, params) => {
  const url = `${baseUrl}?${
    searchText ? queryString.stringify(searchParams) : queryString.stringify(pageParams)
  }`;

  fetch(url, { method: 'GET' });
};
