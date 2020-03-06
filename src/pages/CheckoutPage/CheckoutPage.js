import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import H2 from '../../components/H2';

import dotGrid from '../../assets/images/dot-grid.png';

import ShippingForm from './ShippingForm';

const CheckoutContainer = styled.section`
  && {
    display: flex;
    justify-content: space-around;
    background-image: url(${dotGrid});
    flex-grow: 1;
    padding: 0rem 1rem;
    width: 100%;
  }
`

const ShippingAndPayment = styled.div``

const OrderOverview = styled.div``

function CheckoutPage() {
  return (
    <CheckoutContainer>
      <ShippingAndPayment>
        <Paper elevation={2}>
          <ShippingForm />
        </Paper>
        <Paper elevation={2}>
          <H2> How You Will Pay</H2>
        </Paper>
      </ShippingAndPayment>
      <OrderOverview>
        <Paper>
          <H2>Your Order Overview</H2>
        </Paper>
      </OrderOverview>
    </CheckoutContainer>
  )
}

export default CheckoutPage