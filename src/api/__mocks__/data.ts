import mockCompainesResponseData from 'api/mockData/compaines';
import mockProductResponseData from 'api/mockData/product';

export const getData = () => {
  return new Promise((resolve) => resolve(mockProductResponseData));
};
export const getCompaines = () => {
  return new Promise((resolve) => resolve(mockCompainesResponseData));
};
