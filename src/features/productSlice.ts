import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product, ProductState } from 'types/product';

const initialState: ProductState = {
  data: [],
  filteredData: [],
  basket: [],
  sort: 'low to high',
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]') || [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      action.payload.forEach((getProduct) =>
        state.favorites.forEach((favoriteProduct) => {
          if (getProduct.added === favoriteProduct.added) {
            getProduct.isFavorite = true;
          }
        })
      );
      state.data = action.payload.sort((a, b) => a.price - b.price);
      state.filteredData = action.payload;
    },
    filterByName: (state, action: PayloadAction<string>) => {
      if (action.payload === '') {
        state.filteredData = state.data;
      } else {
        state.filteredData = state.data.filter((product) =>
          product.name
            .trim()
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        );
      }
    },
    addBasketItem: (state, action: PayloadAction<Product>) => {
      state.basket = state.basket.find(
        (basketItem) => basketItem.added === action.payload.added
      )
        ? state.basket.map((basketItem) =>
            basketItem.added === action.payload.added
              ? { ...basketItem, count: basketItem.count + 1 }
              : basketItem
          )
        : [...state.basket, { ...action.payload, count: 1 }];
    },
    icreaseBasketItem: (state, action: PayloadAction<Product>) => {
      state.basket = state.basket.map((basketItem) =>
        basketItem.added === action.payload.added
          ? {
              ...basketItem,
              count: basketItem.count > 0 ? basketItem.count + 1 : 1,
            }
          : basketItem
      );
    },
    decreaseBasketItem: (state, action: PayloadAction<Product>) => {
      state.basket = state.basket.map((basketItem) =>
        basketItem.added === action.payload.added
          ? {
              ...basketItem,
              count: basketItem.count > 1 ? basketItem.count - 1 : 1,
            }
          : basketItem
      );
    },
    deleteBasketItem: (state, action: PayloadAction<Product>) => {
      state.basket = state.basket.filter(
        (basketItem) => basketItem.added !== action.payload.added
      );
    },
    addFavorite: (state, action: PayloadAction<Product>) => {
      state.filteredData = state.filteredData.map((product) =>
        product.added === action.payload.added
          ? { ...product, isFavorite: true }
          : product
      );
      state.favorites = state.favorites.find(
        (product) => product.added === action.payload.added
      )
        ? state.favorites
        : [...state.favorites, { ...action.payload, isFavorite: true }];
    },
    removeFavorite: (state, action: PayloadAction<Product>) => {
      state.favorites = state.favorites.filter(
        (product) => product.added !== action.payload.added
      );
      state.filteredData = state.filteredData.map((product) =>
        product.added === action.payload.added
          ? { ...product, isFavorite: false }
          : product
      );
    },
    sortProducts: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
      if (state.sort === 'low to high') {
        state.filteredData = state.data.sort((a, b) => a.price - b.price);
      } else if (state.sort === 'high to low') {
        state.filteredData = state.data.sort((a, b) => b.price - a.price);
      } else if (state.sort === 'new to old') {
        state.filteredData = state.data.sort((a, b) => a.added - b.added);
      } else {
        state.filteredData = state.data.sort((a, b) => b.added - a.added);
      }
    },
    sortTypeProducts: (state, action: PayloadAction<string>) => {
      if (action.payload === 'mug') {
        state.filteredData = state.data.filter(
          (product) => product.itemType === 'mug'
        );
      } else {
        state.filteredData = state.data.filter(
          (product) => product.itemType === 'shirt'
        );
      }
    },
  },
});

export default productSlice.reducer;
export const {
  setProducts,
  filterByName,
  addBasketItem,
  icreaseBasketItem,
  decreaseBasketItem,
  deleteBasketItem,
  addFavorite,
  removeFavorite,
  sortProducts,
  sortTypeProducts,
} = productSlice.actions;
