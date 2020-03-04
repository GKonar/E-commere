import React from 'react'
import CheckoutForm from './CheckoutForm';
import styled from 'styled-components';

const CheckoutContainer = styled.section`
  margin: 0 auto;
  width: 50%; 
  a {
    color: inherit;
  } 
`

function CheckoutPage() {
  return (
    <CheckoutContainer>
      <CheckoutForm />
    </CheckoutContainer>
  )
}

export default CheckoutPage
