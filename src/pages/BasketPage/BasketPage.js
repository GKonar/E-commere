import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import H1 from '../../components/H1';
import styled from 'styled-components';
import CustomButton from '../../components/CustomButton';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';

import dotGrid from '../../assets/images/dot-grid.png';

const Container = styled.section`
  background-image: url(${dotGrid});
  padding: ${({ theme }) => theme.padding.medium};
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
  /* align-items: center; */
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
  /* transform: rotate(2deg); */
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

// BASKET LIST
const BasketItemsContainer = styled.div`

`
const BasketItemsList = styled.ul`
  
`

const BasketListItem = styled.li`
  display: flex;
  justify-content: space-between;
`

// ITEM
const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
`

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`

const ItemName = styled.div`

`

const ItemPrice = styled.div`

`
const RemoveItemBtn = styled.span`

`
const Increment = styled.span`

`

const Decrement = styled.span`

`

const Quantity = styled.span`

`



function BasketPage({ toFreeDelivery, basketItems }) {
  console.log('BASKET ITEMS: ', basketItems);
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
          {
            basketItems.map(item => {
              return (
                <BasketListItem>
                  <ImageContainer>
                    <ItemImage src={item.images[0]} alt="test" />
                  </ImageContainer>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>Price {item.price}</ItemPrice>
                  <RemoveItemBtn>X</RemoveItemBtn>
                  <Increment>+</Increment>
                  <Quantity>Quantity: 0</Quantity>
                  <Decrement>-</Decrement>
                </BasketListItem>
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
    basketItems: state.basketItems
  }
}

export default connect(mapStateToProps)(BasketPage)

// ITEM SHAPE // DEV
// description: "Figure Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!"
// images: Array(3)
// inStock: true
// name: "Figure"
// price: "60$"