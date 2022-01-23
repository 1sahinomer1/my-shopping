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
    case 'FILTER_BY_NAME':
      if (action.payload === '') {
        return {
          ...state,
          data: state.data,
        };
      } else {
        return {
          ...state,
          data: state.data.filter((product) =>
            product.name.trim().toLowerCase().includes(action.payload)
          ),
        };
      }

    default:
      return state;
  }
};

export default productReducer;
