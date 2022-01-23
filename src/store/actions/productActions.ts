import axios from 'axios';
import { ProductDispatch } from 'types/product';

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
