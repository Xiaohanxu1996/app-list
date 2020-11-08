import axios from 'axios';
const { REACT_APP_APIURL: apiURL } = process.env;

const getTopFreeApps = ({ page, size }: { page: number; size: number }) => {
  const total = page * size;
  return axios.get(`${apiURL}/top-free/all/${total}/explicit.json`);
};

const getTopGrossApps = ({ page, size }: { page: number; size: number }) => {
  const total = page * size;
  return axios.get(`${apiURL}/top-free/all/${total}/explicit.json`);
};

export { getTopFreeApps, getTopGrossApps };
