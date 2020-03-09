import React from 'react';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

import dotGrid from '../../assets/images/dot-grid.png';

import CheckoutForm from './CheckoutForm';
import OrderOverview from './OrderOverview';

const CheckoutWrapper = styled.div`
  background-image: url(${dotGrid});
  min-height: calc(100vh - 90px);
`

const CheckoutContainer = styled.section`
  && {
    display: flex;
    flex-grow: 1;
    width: 70%;
    margin: 0 auto;
  }
`

const ShippingAndPayment = styled.div`
  margin-top: ${({ theme }) => theme.margin.default};
  min-width: 600px;
`

function CheckoutPage() {
  return (
    <CheckoutWrapper>
      <CheckoutContainer>
        <ShippingAndPayment>
          <Paper elevation={1}>
            <CheckoutForm />
          </Paper>
        </ShippingAndPayment>
        <OrderOverview />
      </CheckoutContainer>
    </CheckoutWrapper>
  )
}

export default CheckoutPage;