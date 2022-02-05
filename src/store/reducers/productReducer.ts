import { ProductAction, ProductState } from 'types/product';

const defaultState: ProductState = {
  data: [],
  filteredData: [],
  basket: [],
  sort: 'low to high',
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]') || [],
};

const productReducer = (
  state: ProductState = defaultState,
  action: ProductAction
) => {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      action.payload.forEach((getProduct) =>
        state.favorites.forEach((favoriteProduct) => {
          if (getProduct.added === favoriteProduct.added) {
            getProduct.isFavorite = true;
          }
        })
      );
      return {
        ...state,
        data: action.payload.sort((a, b) => a.price - b.price),
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
    case 'INCREASE_BASKET_ITEM':
      return {
        ...state,
        basket: state.basket.map((basketItem) =>
          basketItem.added === action.payload.added
            ? {
                ...basketItem,
                count: basketItem.count > 0 ? basketItem.count + 1 : 1,
              }
            : basketItem
        ),
      };
    case 'DECREASE_BASKET_ITEM':
      return {
        ...state,
        basket: state.basket.map((product) =>
          product.added === action.payload.added
            ? {
                ...product,
                count: product.count > 1 ? product.count - 1 : 1,
              }
            : product
        ),
      };
    case 'DELETE_BASKET_ITEM':
      return {
        ...state,
        basket: state.basket.filter(
          (product) => product.added !== action.payload.added
        ),
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        filteredData: state.filteredData.map((product) =>
          product.added === action.payload.added
            ? { ...product, isFavorite: true }
            : product
        ),
        favorites: state.favorites.find(
          (product) => product.added === action.payload.added
        )
          ? state.favorites
          : [...state.favorites, { ...action.payload, isFavorite: true }],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (product) => product.added !== action.payload.added
        ),
        filteredData: state.filteredData.map((product) =>
          product.added === action.payload.added
            ? { ...product, isFavorite: false }
            : product
        ),
      };
    case 'SORT_PRODUCTS':
      state.sort = action.payload;
      if (state.sort === 'low to high') {
        return {
          ...state,
          filteredData: state.data.sort((a, b) => a.price - b.price),
        };
      } else if (state.sort === 'high to low') {
        return {
          ...state,
          filteredData: state.data.sort((a, b) => b.price - a.price),
        };
      } else if (state.sort === 'new to old') {
        return {
          ...state,
          filteredData: state.data.sort((a, b) => a.added - b.added),
        };
      } else if (state.sort === 'old to new') {
        return {
          ...state,
          filteredData: state.data.sort((a, b) => b.added - a.added),
        };
      }
      return {
        ...state,
        filteredData: state.data,
      };
    case 'TYPE_PRODUCT':
      if (action.payload === 'mug') {
        return {
          ...state,
          filteredData: state.data.filter(
            (product) => product.itemType === 'mug'
          ),
        };
      } else if (action.payload === 'shirt') {
        return {
          ...state,
          filteredData: state.data.filter(
            (product) => product.itemType === 'shirt'
          ),
        };
      } else {
        return {
          ...state,
          filteredData: state.data,
        };
      }

    default:
      return state;
  }
};

export default productReducer;
