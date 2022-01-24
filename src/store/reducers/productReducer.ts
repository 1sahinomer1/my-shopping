import { ProductAction, ProductState } from 'types/product';

const defaultState: ProductState = {
  data: [],
  filteredData: [],
  basket: [],
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
        filteredData: action.payload,
      };
    case 'FILTER_BY_NAME':
      if (action.payload === '') {
        return {
          ...state,
          filteredData: state.data,
        };
      } else {
        return {
          ...state,
          filteredData: state.data.filter((product) =>
            product.name.trim().toLowerCase().includes(action.payload)
          ),
        };
      }
    case 'ADD_BASKET_ITEM':
      return {
        ...state,
        basket: state.basket.find(
          (basketItem) => basketItem.added === action.payload.added
        )
          ? state.basket.map((basketItem) =>
              basketItem.added === action.payload.added
                ? { ...basketItem, count: basketItem.count + 1 }
                : basketItem
            )
          : [...state.basket, { ...action.payload, count: 1 }],
      };
    default:
      return state;
  }
};

export default productReducer;
