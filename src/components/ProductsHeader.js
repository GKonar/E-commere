import React from 'react';
import styled from 'styled-components';
import H1 from './H1';

const Container = styled(H1)`
  && {
    margin-bottom: 0;
    margin-top: ${({ theme }) => theme.margin.medium};
    justify-content: center;
    position: relative;
  }
  /* &::after {
      content: "";
      display: flex;
      background-color: ${({ theme }) => theme.color.main};
      width: 25%;
      height: 2px;
      position: absolute;
      top: 110%;
      z-index: 1;
      transition: all .1s;
      text-align: center;
    } */
  
`

function ProductsHeader({ children }) {
  return (
    <Container>{children}</Container>
  )
}


export default ProductsHeader
