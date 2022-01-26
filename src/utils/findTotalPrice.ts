import { Product } from 'types/product';

export const findTotalPrice = (basket: Product[]) => {
  return basket
    .reduce((total, item) => (total = total + item.price * item.count), 0)
    .toFixed(2);
};
