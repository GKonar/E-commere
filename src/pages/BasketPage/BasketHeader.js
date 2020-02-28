import React from 'react'
import styled from 'styled-components';

import MoneyOffIcon from '@material-ui/icons/MoneyOff';

import H1 from '../../components/H1';
import NavigationButtons from './NavigationButtons';


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
        <NavigationButtons />
      </Container>
    </div>
  )
}

export default BasketHeader
