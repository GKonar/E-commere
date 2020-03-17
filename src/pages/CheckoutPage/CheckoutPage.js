import React from 'react';

import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

import dotGrid from '../../assets/images/dot-grid.png';

import CheckoutForm from './CheckoutForm';
import OrderOverview from './OrderOverview';

import { sizes } from '../../helpers/sizes';

const CheckoutWrapper = styled.div`
  background-image: url(${dotGrid});
  min-height: calc(100vh - 90px);
`

const CheckoutContainer = styled.section`
  display: flex;
  flex-grow: 1;
  width: 70%;
  margin: 0 auto;

  ${sizes.desktopM} {
    width: 85%;
  }

  ${sizes.laptopL} {
    width: 90%;
  }

  ${sizes.laptopM} {
    width: 80%;
    flex-direction: column-reverse;
  }
  
  ${sizes.mobileL} {
    width: 95%;
  }
`

const ShippingAndPayment = styled.div`
  margin-top: ${({ theme }) => theme.margin.default};
  min-width: 600px;

  ${sizes.laptopM} {
    min-width: 0px;
  }
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