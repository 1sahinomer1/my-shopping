import { Pagination } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsAll } from 'store/actions/productActions';
import styled from 'styled-components';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAll());
  }, []);

  return (
    <Wrapper>
      <p>filter</p>
      <Pagination />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;
