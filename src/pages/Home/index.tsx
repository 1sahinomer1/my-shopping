import { getData } from 'api/product';
import { Filter, Pagination } from 'components';
import { setProducts } from 'features/productSlice';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'store';
import styled from 'styled-components';

const Home = () => {
  const dispatch = useAppDispatch();

  const getAllProducts = useCallback(async () => {
    const getItems = await getData();
    if (getItems) dispatch(setProducts(getItems));
  }, [dispatch]);

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <Wrapper>
      <Filter />
      <Pagination />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;
