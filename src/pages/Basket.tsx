import { BsPlusCircleFill } from 'react-icons/bs';

import styled from 'styled-components';
import { Product } from 'types/product';
import { AiFillDelete, AiFillMinusCircle } from 'react-icons/ai';
import { findTotalPrice } from 'utils/findTotalPrice';
import { useAppDispatch, useAppSelector } from 'store';
import {
  decreaseBasketItem,
  deleteBasketItem,
  icreaseBasketItem,
} from 'features/productSlice';

const Basket = () => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector((state) => state.products.basket);
  let totalCount = findTotalPrice(basket);

  const deleteEmptyItem = (basketItem: Product) => {
    if (basketItem.count > 1) {
      dispatch(decreaseBasketItem(basketItem));
    } else {
      dispatch(deleteBasketItem(basketItem));
    }
  };

  return (
    <BasketPageContainer>
      <BasketContainer>
        {basket.map((basketItem, key) => (
          <Wrapper key={key}>
            <ItemSection>
              <ImageWrapper>
                <img src="watches.png" alt="" />
              </ImageWrapper>
              <ColumnSection>
                <Name>{basketItem.name}</Name>
                <Description>{basketItem.description}</Description>
                <Seller>Satıcı :{basketItem.manufacturer}</Seller>
                <Price>{basketItem.price}₺</Price>
                <BasketItemsTags>
                  {basketItem.tags.map((tag) => {
                    return <Tag>{tag}</Tag>;
                  })}
                </BasketItemsTags>
              </ColumnSection>
            </ItemSection>
            <CountAddSection>
              <BsPlusCircleFill
                size={'1.5em'}
                color="#8FC1D4"
                onClick={() => {
                  dispatch(icreaseBasketItem(basketItem));
                }}
              >
                +
              </BsPlusCircleFill>
              <Count>{basketItem.count}</Count>
              <AiFillMinusCircle
                size={'1.5em'}
                color="#8FC1D4"
                onClick={() => {
                  deleteEmptyItem(basketItem);
                }}
              >
                -
              </AiFillMinusCircle>
              <AiFillDelete
                size={'1.5em'}
                color="#DA1212"
                onClick={() => {
                  dispatch(deleteBasketItem(basketItem));
                }}
              >
                delete
              </AiFillDelete>
            </CountAddSection>
          </Wrapper>
        ))}
      </BasketContainer>
      <Account>
        <SelectedProducts>SELECTED PRODUCTS({basket.length})</SelectedProducts>
        <TotalPrice>{totalCount}₺</TotalPrice>
        <hr />
        <AccountDetail>
          <p>Kargo</p>
          <p>
            <Free> Bedava</Free> <Discount>14.99₺</Discount>
          </p>
        </AccountDetail>
        <AccountDetail>
          <p>Ürünler</p>
          <p>{totalCount}₺</p>
        </AccountDetail>
      </Account>
    </BasketPageContainer>
  );
};

export default Basket;

const BasketPageContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
`;
const BasketContainer = styled.div`
  max-width: 85%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2px solid #e5e5e5;
`;
const ImageWrapper = styled.div`
  width: 10%;
  margin-right: 30px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    background-repeat: round;
  }
`;
const ColumnSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const BasketItemsTags = styled.section`
  display: flex;
  color: ${(p) => p.theme.fontColor};
  flex-wrap: wrap;
`;
const Tag = styled.span`
  margin-right: 10px;
  padding: 10px;
  background-color: ${(p) => p.theme.headerColor};
  color: ${(p) => p.theme.fontColor};
`;
const Seller = styled.span`
  color: ${(p) => p.theme.fontColor};
  font-size: 16px;
`;
const Price = styled.p`
  color: ${(p) => p.theme.fontColor};
`;
const Name = styled.h1`
  color: ${(p) => p.theme.fontColor};
  font-weight: 500;
`;
const Description = styled.h2`
  font-weight: 200;
  color: ${(p) => p.theme.fontColor};
  font-size: 16px;
`;
const CountAddSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
`;
const Count = styled.span`
  color: ${(p) => p.theme.fontColor};
`;
const ItemSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
`;
const Account = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid #e5e5e5;
  border-radius: 20px;
  position: sticky;
  top: 0;
  height: 200px;
`;
const SelectedProducts = styled.p`
  font-size: 14px;
  color: ${(p) => p.theme.fontColor};
`;
const TotalPrice = styled.span`
  color: ${(p) => p.theme.fontColor};
  font-size: 24px;
  font-weight: 600;
`;
const AccountDetail = styled.section`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: ${(p) => p.theme.fontColor};
`;
const Discount = styled.span`
  text-decoration: line-through;
`;
const Free = styled.span`
  color: green;
`;
