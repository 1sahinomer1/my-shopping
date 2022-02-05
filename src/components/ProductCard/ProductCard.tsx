import { Star } from 'Icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store';
import {
  addBasket,
  addFavorite,
  removeFavorite,
} from 'store/actions/productActions';
import styled from 'styled-components';

import { Product } from 'types/product';

type props = {
  product: Product;
};

const ProductCard = ({ product }: props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: AppState) => state.products.favorites);
  const addItemBasket = (product: Product) => {
    dispatch(addBasket(product));
  };
  localStorage.setItem('favorites', JSON.stringify(favorites));
  return (
    <ProductCardContainer data-testid="product">
      <ImageWrapper>
        <img src="watches.png" alt="" />
      </ImageWrapper>
      <Info>{product.name}</Info>
      <Info>{product.price}</Info>
      <AddButton onClick={() => addItemBasket(product)}>
        <Button>Basket</Button>
      </AddButton>
      {product?.isFavorite === undefined || product?.isFavorite === false ? (
        <button
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            dispatch(addFavorite(product));
          }}
        >
          <StyledStar fill={false} />
        </button>
      ) : (
        <button
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault();
            dispatch(removeFavorite(product));
          }}
        >
          <StyledStar fill={true} />
        </button>
      )}
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

const AddButton = styled.div`
  background-color: #6ecb63;
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
