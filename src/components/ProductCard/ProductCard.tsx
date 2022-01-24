import { Star } from 'Icons';
import { useDispatch } from 'react-redux';
import { addBasket } from 'store/actions/productActions';
import styled from 'styled-components';

import { Product } from 'types/product';

type props = {
  product: Product;
};

const ProductCard = ({ product }: props) => {
  const dispatch = useDispatch();

  const addItemBasket = (product: Product) => {
    dispatch(addBasket(product));
  };
  return (
    <ProductCardContainer>
      <ImageWrapper>
        <img src="watches.png" alt="" />
      </ImageWrapper>
      <Info>{product.name}</Info>
      <Info>{product.price}</Info>
      <AddButton onClick={() => addItemBasket(product)}>
        <Button>Basket</Button>
      </AddButton>
      <StyledStar />
    </ProductCardContainer>
  );
};

export default ProductCard;

const ProductCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(p) => p.theme.headerColor};
  padding: 20px;
  margin: 2px;
  position: relative;
`;
const ImageWrapper = styled.div`
  width: 50%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-repeat: round;
  }
`;
const Info = styled.p`
  color: ${(p) => p.theme.fontColor};
`;
const ButtonWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const AddButton = styled.div`
  background-color: #6ecb63;
  padding: 10px;
  width: 50%;
`;
const FavButton = styled.div`
  background-color: red;
  padding: 10px;
  width: 50%;
`;
const Button = styled.button`
  color: white;
`;
const StyledStar = styled(Star)`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 0;
  margin: 20px;
`;
