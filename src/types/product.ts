import { ThunkDispatch } from 'redux-thunk';

export interface Product {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
  count?: any;
}

export interface ProductState {
  data: Product[];
  filteredData: Product[];
  basket: Product[];
  message: string;
}

interface GET_PRODUCTS_SUCCESS {
  type: 'GET_PRODUCTS_SUCCESS';
  payload: Product[];
}
interface GET_PRODUCTS_ERROR {
  type: 'GET_PRODUCTS_ERROR';
}
interface FILTER_BY_NAME {
  type: 'FILTER_BY_NAME';
  payload: string;
}
interface ADD_BASKET_ITEM {
  type: 'ADD_BASKET_ITEM';
  payload: Product;
}

export type ProductAction =
  | GET_PRODUCTS_ERROR
  | GET_PRODUCTS_SUCCESS
  | FILTER_BY_NAME
  | ADD_BASKET_ITEM;
export type ProductDispatch = ThunkDispatch<ProductState, any, ProductAction>;
