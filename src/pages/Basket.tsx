import { useSelector } from 'react-redux';
import { AppState } from 'store';

const Basket = () => {
  const basket = useSelector((state: AppState) => state.products.basket);
  return (
    <div>
      {basket.map((basketItem) => (
        <>
          <>{basketItem.name}</>
          <p>{basketItem.count}</p>
        </>
      ))}
    </div>
  );
};

export default Basket;
