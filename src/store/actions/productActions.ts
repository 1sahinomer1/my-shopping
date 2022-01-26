import axios from 'axios';
import { Product, ProductDispatch } from 'types/product';

export const getProductsAll = () => async (dispatch: ProductDispatch) => {
  try {
    const response = await axios.get(
      'https://my-shopping-json-server.herokuapp.com/items'
    );
    dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_PRODUCTS_ERROR' });
  }
};
export const filterByName =
  (inputValue: string) => (dispatch: ProductDispatch) => {
    dispatch({ type: 'FILTER_BY_NAME', payload: inputValue });
  };
export const addBasket = (value: Product) => (dispatch: ProductDispatch) => {
  dispatch({
    type: 'ADD_BASKET_ITEM',
    payload: value,
  });
};
export const increaseItem = (value: Product) => (dispatch: ProductDispatch) => {
  dispatch({
    type: 'INCREASE_BASKET_ITEM',
    payload: value,
  });
};
export const decreaseItem = (value: Product) => (dispatch: ProductDispatch) => {
  dispatch({
    type: 'DECREASE_BASKET_ITEM',
    payload: value,
  });
};
export const deleteItem = (value: Product) => (dispatch: ProductDispatch) => {
  dispatch({
    type: 'DELETE_BASKET_ITEM',
    payload: value,
  });
};
export const addFavorite = (value: Product) => (dispatch: ProductDispatch) => {
  dispatch({ type: 'ADD_FAVORITE', payload: value });
};
export const removeFavorite =
  (value: Product) => (dispatch: ProductDispatch) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: value });
  };
