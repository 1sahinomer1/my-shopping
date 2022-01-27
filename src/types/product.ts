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
  isFavorite?: boolean;
}

export interface ProductState {
  data: Product[];
  filteredData: Product[];
  basket: Product[];
  sort: string;
  favorites: Product[];
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
interface INCREASE_BASKET_ITEM {
  type: 'INCREASE_BASKET_ITEM';
  payload: Product;
}
interface DECREASE_BASKET_ITEM {
  type: 'DECREASE_BASKET_ITEM';
  payload: Product;
}
interface DELETE_BASKET_ITEM {
  type: 'DELETE_BASKET_ITEM';
  payload: Product;
}
interface ADD_FAVORITE {
  type: 'ADD_FAVORITE';
  payload: Product;
}
interface REMOVE_FAVORITE {
  type: 'REMOVE_FAVORITE';
  payload: Product;
}
interface SORT_PRODUCTS {
  type: 'SORT_PRODUCTS';
  payload: string;
}
interface TYPE_PRODUCT {
  type: 'TYPE_PRODUCT';
  payload: string;
}

export type ProductAction =
  | GET_PRODUCTS_ERROR
  | GET_PRODUCTS_SUCCESS
  | FILTER_BY_NAME
  | ADD_BASKET_ITEM
  | INCREASE_BASKET_ITEM
  | DECREASE_BASKET_ITEM
  | DELETE_BASKET_ITEM
  | ADD_FAVORITE
  | REMOVE_FAVORITE
  | SORT_PRODUCTS
  | TYPE_PRODUCT;
export type ProductDispatch = ThunkDispatch<ProductState, any, ProductAction>;
