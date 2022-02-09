import { sortProducts, sortTypeProducts } from 'features/productSlice';
import { useState } from 'react';
import { useAppDispatch } from 'store';

const Filter = () => {
  const [sortPrice, setSortPrice] = useState('low to high');
  const [productType, setProductType] = useState('mug');
  const dispatch = useAppDispatch();

  const handleRadio = (e: any) => {
    setSortPrice(e.target.value);
    dispatch(sortProducts(e.target.value));
  };

  return (
    <div>
      <div>
        <p>Sorting</p>
        <div>
          <input
            type="radio"
            name="low to high"
            id=""
            value="low to high"
            checked={sortPrice === 'low to high'}
            onChange={handleRadio}
          />
          <label htmlFor="low to high">low to high</label>
        </div>

        <div>
          <input
            type="radio"
            name="high to low"
            id=""
            value="high to low"
            checked={sortPrice === 'high to low'}
            onChange={handleRadio}
          />
          <label htmlFor="new to old">high to low</label>
        </div>

        <div>
          <input
            type="radio"
            name="new to old"
            id=""
            value="new to old"
            checked={sortPrice === 'new to old'}
            onChange={handleRadio}
          />
          <label htmlFor="old to new">new to old</label>
        </div>

        <div>
          <input
            type="radio"
            name="old to new"
            id=""
            value="old to new"
            checked={sortPrice === 'old to new'}
            onChange={handleRadio}
          />
          <label htmlFor="old to new">old to new</label>
        </div>
        {sortPrice}
      </div>

      <button
        onClick={() => {
          setProductType('mug');
          dispatch(sortTypeProducts('mug'));
        }}
      >
        mug
      </button>
      <button
        onClick={() => {
          setProductType('shirt');
          dispatch(sortTypeProducts('shirt'));
        }}
      >
        shirt
      </button>
      {productType}
    </div>
  );
};

export default Filter;
