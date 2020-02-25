import React from 'react'
import H1 from '../../components/H1';
import styled from 'styled-components';

import CustomButton from '../../components/CustomButton';

import dotGrid from '../../assets/images/dot-grid.png';

import MoneyOffIcon from '@material-ui/icons/MoneyOff';

const Heading = styled(H1)`
  && {
    margin: 0;
    margin-left: ${({ theme }) => theme.margin.medium};
  }
`

const Container = styled.section`
  background-image: url(${dotGrid});
    padding: ${({ theme }) => theme.padding.medium};
    a {
      color: inherit;
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
  margin-right: ${({ theme }) => theme.margin.medium}; 
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

function BasketPage() {
  return (
    <Container>
      <BasketHeader>
        <HeaderLeft>
          <Heading>Your Basket</Heading>
          <FreeDeliveryCount>
            <MoneyOffIcon fontSize="large" /> &nbsp; &nbsp;spend {'NUM'} more for free delivery
          </FreeDeliveryCount>
        </HeaderLeft>
        <NavigationButtons>
          <ContinueShoppingButton>Continue Shopping</ContinueShoppingButton>
          <CheckoutButton>Checkout Now</CheckoutButton>
        </NavigationButtons>
      </BasketHeader>
    </Container>
  )
}

export default BasketPage
