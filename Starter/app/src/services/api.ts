import { Config } from '@/config';

import apisauce from 'apisauce';

// Create a base for API.
const create = () => {
  const api = apisauce.create({
    baseURL: Config.REACT_APP_API_URL,
    // 10 second timeout...
    timeout: 10000,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const getSession = () => api.post('/_session');

  return {
    getSession,
  };
};

export default {
  create,
};
