import React from 'react';
import styled from 'styled-components';
import H1 from './H1';

const Container = styled(H1)`
  && {
    padding: .9rem;
    margin: 0;
    justify-content: center;
    position: relative;
    font-weight: 700;
    letter-spacing: 1px;
  }
`

function ProductsHeader({ children }) {
  return (
    <Container>{children}</Container>
  )
}


export default ProductsHeader
