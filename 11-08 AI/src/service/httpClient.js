// import axios from 'axios';

import { json } from "react-router-dom";

// const httpClient = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com/', // Replace with your API base URL
//   timeout: 5000, // Set the timeout for requests (optional)
//   headers: {
//     'Content-Type': 'application/json', // Set the default content type
//   },
// });

// export const get = (url, config = {}) => {
//   return httpClient.get(url, config);
// };

// export const post = (url, data, config = {}) => {
//   return httpClient.post(url, data, config);
// };

// export const put = (url, data, config = {}) => {
//   return httpClient.put(url, data, config);
// };

// export const del = (url, config = {}) => {
//   return httpClient.delete(url, config);
// };

// export const BASE_URL = 'http://3.110.31.117:5000/'
export const BASE_URL = 'http://13.127.11.171:5000/'
export const get = (url) => {
  return fetch(BASE_URL + url)
    .then(handleResponse)
    .catch(handleError);
};

export const post = (url, data) => {
  return fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res=> res.json())
    // .then(handleResponse)
    .catch(handleError);
};

export const put = (url, data) => {
  return fetch(BASE_URL + url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(handleResponse)
    .catch(handleError);
};

export const del = (url) => {
  return fetch(BASE_URL + url, {
    method: 'DELETE',
  })
    .then(handleResponse)
    .catch(handleError);
};

const handleResponse = (response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

const handleError = (error) => {
  console.error('Error:', error);
  throw error;
};