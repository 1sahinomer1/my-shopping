import { ProductCard } from 'components';
import styled from 'styled-components';
import { Product } from 'types/product';

type props = {
  data: Product[];
};

const Products = ({ data }: props) => {
  return (
    <ProductsWrapper>
      {data &&
        data.map((product, key) => <ProductCard key={key} product={product} />)}
    </ProductsWrapper>
  );
};

export default Products;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;
