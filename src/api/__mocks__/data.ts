import {
  mockCompainesResponseData,
  mockProductResponseData,
} from 'api/mockData';

export const getData = () => {
  return new Promise((resolve) => resolve(mockProductResponseData));
};
export const getCompaines = () => {
  return new Promise((resolve) => resolve(mockCompainesResponseData));
};
