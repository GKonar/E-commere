import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MoneyOffIcon from '@material-ui/icons/MoneyOff';

import CustomButton from '../../components/CustomButton';
import H1 from '../../components/H1';

const Container = styled.div`
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

const Heading = styled(H1)`
  && {
    margin: 0;
    margin-left: ${({ theme }) => theme.margin.medium};
  }
`

function BasketHeader({ toFreeDelivery }) {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  )
}

export default BasketHeader
