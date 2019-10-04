import queryString from 'query-string';

export const GET = (baseUrl, params) => {
  const url = `${baseUrl}?${queryString.stringify(params)}`;

  console.log(url);

  return fetch(url, { method: 'GET' });
};
