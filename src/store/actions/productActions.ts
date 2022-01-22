import axios from 'axios';
import { ProductDispatch } from 'types/product';

export const getProductsAll = () => async (dispatch: ProductDispatch) => {
  try {
    const response = await axios.get('http://localhost:3004/items');
    dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_PRODUCTS_ERROR' });
  }
};
