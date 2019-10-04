import queryString from 'query-string';

export const GET = (baseUrl, params) => {
  const url = `${baseUrl}?${queryString.stringify(params)}`;

  return fetch(url, { method: 'GET' });
};
