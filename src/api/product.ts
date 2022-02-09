import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://my-shopping-json-server.herokuapp.com/',
});
export const getData = async () => {
  const { data } = await API.get('items');
  return data;
};
export const getCompaines = async () => {
  const res = await API.get('compaines');
  const data = res.data;
  return data;
};
