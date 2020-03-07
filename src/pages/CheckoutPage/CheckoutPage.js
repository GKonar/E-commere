import React from 'react';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import H2 from '../../components/H2';

import dotGrid from '../../assets/images/dot-grid.png';

import ShippingForm from './ShippingForm';
import OrderOverview from './OrderOverview';

const CheckoutContainer = styled.section`
  && {
    display: flex;
    justify-content: flex-start;
    background-image: url(${dotGrid});
    flex-grow: 1;
    padding: 0rem 1rem;
    width: 80%;
    margin: 0 auto;
  }
`

const ShippingAndPayment = styled.div`
  margin-top: ${({ theme }) => theme.margin.default};
  min-width: 600px;
`

function CheckoutPage() {
  return (
    <CheckoutContainer>
      <ShippingAndPayment>
        <Paper elevation={1}>
          <ShippingForm />
        </Paper>
        <Paper elevation={1}>
          <H2> How You Will Pay</H2>
        </Paper>
      </ShippingAndPayment>
      <OrderOverview />
    </CheckoutContainer>
  )
}

export default CheckoutPage;