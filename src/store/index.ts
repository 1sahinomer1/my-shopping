import { combineReducers } from 'redux';
import { ProductState } from 'types/product';
import productReducer from './reducers/productReducer';

export interface AppState {
  products: ProductState;
}

const rootReducer = combineReducers({
  products: productReducer,
});
export default rootReducer;
