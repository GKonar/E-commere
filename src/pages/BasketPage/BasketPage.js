import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styled from 'styled-components';
import H1 from '../../components/H1';
import H3 from '../../components/H3';
import CustomButton from '../../components/CustomButton';

import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import Divider from '@material-ui/core/Divider';

import dotGrid from '../../assets/images/dot-grid.png';

import { removeItem, incrementItemQuantity, decrementItemQuantity } from '../../store/actions/actions';

import BasketListItem from './BasketListItem';

const Container = styled.section`
  background-image: url(${dotGrid});
  padding: ${({ theme }) => theme.padding.medium};
  color: ${({ theme }) => theme.textColor.primary};
  height: 100vh; /* DEV */
    a {
      color: inherit;
      text-decoration: none;
      width: 100%;
      height: 100%;
    } 
`

const Heading = styled(H1)`
  && {
    margin: 0;
    margin-left: ${({ theme }) => theme.margin.medium};
  }
`

const BasketHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`

const FreeDeliveryCount = styled.div`
  font-size: ${({ theme }) => theme.textSize.medium};
  display: flex;  
  align-items: center;
  margin-right: ${({ theme }) => theme.margin.default}; 
  color: ${({ theme }) => theme.textColor.gold};
  font-weight: 600;
  letter-spacing: 1px;
  transform: rotate(2deg);
`

const NavigationButtons = styled.div`
  width: 40%;
  display: flex;
`

const ContinueShoppingButton = styled(CustomButton)`
  && {
    margin: 0 2rem;
  }
`

const CheckoutButton = styled(CustomButton)`
  && {
    color: ${({ theme }) => theme.textColor.secondary};
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid #2f3542;
    margin: 0 2rem;
    &:hover {
      background-color: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.textColor.primary};
    }
  }
`
const BasketItemsContainer = styled.div``

const BasketItemsList = styled.ul`
  padding: ${({ theme }) => theme.padding.medium};
`

const ItemListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.medium};
  background-color: ${({ theme }) => theme.color.white};
`

const HeaderH3 = styled(H3)`
  && {
    margin: 0
  }
`

function BasketPage({
  toFreeDelivery,
  basketItems,
  onItemRemove,
  onDecrementItemQuantity,
  onIncrementItemQuantity
}) {
  console.log('BASKET ITEMS: ', basketItems.length); // DEV
  return (
    <Container>
      <BasketHeader>
        <HeaderLeft>
          <Heading>Your Basket</Heading>
          {toFreeDelivery > 0 ? (
            <FreeDeliveryCount>
              <MoneyOffIcon fontSize="large" /> &nbsp; &nbsp;spend {`${toFreeDelivery}$`} more for free delivery
              </FreeDeliveryCount>
          ) : (
              <FreeDeliveryCount>You get free shipping !</FreeDeliveryCount>
            )}
        </HeaderLeft>
        <NavigationButtons>
          <ContinueShoppingButton><Link to='/'>Continue Shopping</Link></ContinueShoppingButton>
          <CheckoutButton>Checkout Now</CheckoutButton>
        </NavigationButtons>
      </BasketHeader>
      <BasketItemsContainer>
        <BasketItemsList>
          <Divider />
          <ItemListHeader>
            <HeaderH3>item description</HeaderH3>
            <HeaderH3>price</HeaderH3>
          </ItemListHeader>
          {
            basketItems.length === 0 ? <Divider /> : null
          }
          {
            basketItems.map(item => {
              return (
                <BasketListItem
                  key={item.id}
                  item={item}
                  onItemRemove={onItemRemove}
                  increment={onIncrementItemQuantity}
                  decrement={onDecrementItemQuantity}
                />
              )
            })
          }
        </BasketItemsList>
      </BasketItemsContainer>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    toFreeDelivery: state.toFreeDelivery,
    basketItems: state.basketItems,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onItemRemove: (item) => dispatch(removeItem(item)),
    onIncrementItemQuantity: (item) => dispatch(incrementItemQuantity(item)),
    onDecrementItemQuantity: (item) => dispatch(decrementItemQuantity(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage)
