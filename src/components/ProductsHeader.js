import React from 'react';
import styled from 'styled-components';
import H1 from './H1';

const Container = styled(H1)`
  && {
    margin-top: ${({ theme }) => theme.margin.medium};
    margin-bottom: ${({ theme }) => theme.margin.default};
    justify-content: center;
    position: relative;
    font-weight: 700;
    letter-spacing: 1px;
  }
  /* &::after {
      content: "";
      display: flex;
      background-color: ${({ theme }) => theme.color.main};
      width: 100%;
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
