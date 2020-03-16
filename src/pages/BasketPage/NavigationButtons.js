import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { ButtonStyled } from '../../components/CustomButton';

import { sizes } from '../../helpers/sizes';

const Container = styled.div`
  width: 40%;
  display: flex;
  
  ${sizes.laptopS} {
    width: 100%;
  }
`

const ContinueShoppingButton = styled(ButtonStyled)`
  && {
    margin: 0 2rem;

    ${sizes.tablet} {
      margin: .5rem;
    } 
  }
`

const CheckoutButton = styled(ButtonStyled)`
  && {
    color: ${({ theme }) => theme.textColor.secondary};
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid #2f3542;
    margin: 0 2rem;
    &:hover {
      background-color: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.textColor.primary};
    }

    ${sizes.tablet} {
      margin: .5rem;
    }
  }
`

function NavigationButtons({ numOfBasketItems }) {
  return (
    <Container>
      <ContinueShoppingButton><Link to='/'>Continue Shopping</Link></ContinueShoppingButton>
      <CheckoutButton disabled={numOfBasketItems === 0}><Link to='/checkout'>Checkout Now</Link></CheckoutButton>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    numOfBasketItems: state.numOfBasketItems
  }
}

export default connect(mapStateToProps)(NavigationButtons)
