import React from 'react'
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import CustomButton from '../../components/CustomButton';

const Container = styled.div`
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

function NavigationButtons() {
  return (
    <Container>
      <ContinueShoppingButton><Link to='/'>Continue Shopping</Link></ContinueShoppingButton>
      <CheckoutButton><Link to='/checkout'>Checkout Now</Link></CheckoutButton>
    </Container>
  )
}

export default NavigationButtons
