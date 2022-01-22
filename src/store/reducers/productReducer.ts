import { ProductAction, ProductState } from 'types/product';

const defaultState: ProductState = {
  data: [],
  message: 'omer',
};

const productReducer = (
  state: ProductState = defaultState,
  action: ProductAction
) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
