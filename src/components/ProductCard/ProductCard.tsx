import styled from 'styled-components';

import { Product } from 'types/product';

type props = {
  product: Product;
};

const ProductCard = ({ product }: props) => {
  return (
    <ProductCardContainer>
      <ImageWrapper>
        <img src="MX472.jpg" alt="" loading="lazy" />
      </ImageWrapper>
      <Info>{product.name}</Info>
      <Info>{product.price}</Info>
      <ButtonWrapper>
        <FavButton>
          <Button>Fav</Button>
        </FavButton>
        <AddButton>
          <Button>Basket</Button>
        </AddButton>
      </ButtonWrapper>
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
`;
const ImageWrapper = styled.div`
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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
  background-color: #064635;
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
