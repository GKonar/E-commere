import React from 'react';
import { connect } from 'react-redux';
import H2 from '../../components/H2';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import DiscountCodesForm from '../BasketPage/DiscountCodesForm';

const OrderContainer = styled.div`
  position: fixed;
  margin-top: ${({ theme }) => theme.margin.default};
  right: 20%;
`

const Order = styled.div`
  padding: ${({ theme }) => theme.padding.medium};
  font-weight: 500;
  min-width: 450px;
`

const ItemsContainer = styled.div`
  max-height: 400px;
  overflow: scroll;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 60px;
  margin: ${({ theme }) => theme.margin.small};
`

const ImageAndNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.margin.small} 0;
`

const Image = styled.img`
  width: 100%;
`

const ItemName = styled.p`
  font-weight: 600;
  margin: ${({ theme }) => theme.margin.small};
`

const ItemPrice = styled.p`
  margin: ${({ theme }) => theme.margin.default};
`

const ItemQty = styled.p`
  font-weight: 500;
  color: ${ ({ theme }) => theme.textColor.smallcontrast};
  margin: ${({ theme }) => theme.margin.default};
`

const SummaryItem = styled.p`
  font-weight: 700;
  margin: ${({ theme }) => theme.margin.default};
  display: flex;
  justify-content: space-between;
`
const ToPay = styled.p`
  font-weight: 700;
  margin: ${({ theme }) => theme.margin.default};
  margin-top: ${({ theme }) => theme.margin.medium};
  font-size: ${({ theme }) => theme.textSize.medium};
  display: flex;
  justify-content: space-between;
`

const DiscountCodes = styled.div`
  padding: ${({ theme }) => theme.padding.small} ${({ theme }) => theme.padding.medium};
`


function OrderOverview({ basketItems, basketValue, hasDiscount }) {
  console.log(basketItems, basketValue, hasDiscount)

  return (
    <OrderContainer>
      <Paper elevation={1}>
        <Order>
          <H2>Your Order Overview</H2>
          <Divider />
          <ItemsContainer>
            {
              basketItems.map(item => {
                return (
                  <>
                    <Item >
                      <ImageAndNameWrapper>
                        <ImageContainer>
                          <Image src={item.images[0]} alt="item-overview-img" />
                        </ImageContainer>
                        <ItemName>{item.name}</ItemName>
                      </ImageAndNameWrapper>
                      <ItemQty>qty: {item.qty}</ItemQty>
                      <ItemPrice>{item.price}$</ItemPrice>
                    </Item>
                    <Divider />
                  </>
                )
              })
            }
          </ItemsContainer>
          <SummaryItem>
            <span>Total:</span>
            <span>{basketValue} $</span>
          </SummaryItem>
          <SummaryItem>
            <span>Delivery:</span>
            <span>20$</span>
          </SummaryItem>
          <Divider />
          <ToPay>
            <span>To Pay:</span>
            <span>{basketValue + 20} $</span>
          </ToPay>
        </Order>
        <Divider />
        <DiscountCodes>
          <DiscountCodesForm />
        </DiscountCodes>
      </Paper>
    </OrderContainer>
  )
}

const mapStateToProps = state => {
  return {
    basketItems: state.basketItems,
    basketValue: state.basketValue,
    hasDiscount: state.hasDiscount
  }
}

export default connect(mapStateToProps)(OrderOverview);
