import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://my-shopping-json-server.herokuapp.com/',
});
export const getData = async () => {
  const res = await API.get('items');
  const data = res.data;
  return data;
};
export const getCompaines = async () => {
  const res = await API.get('compaines');
  const data = res.data;
  return data;
};
