import { getData } from 'api/product';
import { Product, ProductDispatch } from 'types/product';

export const getProductsAll = () => async (dispatch: ProductDispatch) => {
  try {
    const getItems = await getData();
    dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: getItems });
  } catch (error) {
    dispatch({ type: 'GET_PRODUCTS_ERROR' });
  }
};
export const filterByName =
  (inputValue: string) => (dispatch: ProductDispatch) => {
    dispatch({ type: 'FILTER_BY_NAME', payload: inputValue.toLowerCase() });
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
export const sortProducts = (value: string) => (dispatch: ProductDispatch) => {
  dispatch({ type: 'SORT_PRODUCTS', payload: value });
};
export const typeProducts = (value: string) => (dispatch: ProductDispatch) => {
  dispatch({ type: 'TYPE_PRODUCT', payload: value });
};
