import React from 'react'
import styled from 'styled-components';

const ProductContainer = styled.div`
  padding: 1rem;
  position: relative;
  height: 100%; 

  /*  Place image in the middle   */
  display: flex;
  justify-content: center;
  align-items: center;    

  &:hover .product-name {
    transform: translateX(0);
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 350px;
  height: 350px;
  overflow: hidden;
`

const SmallDescritpion = styled.span`
  position: absolute;
  overflow: hidden;
  z-index: 100;
`

const Price = styled.p`
  margin: 1rem;
  margin-bottom: 0;
  display: inline-flex;
  background-color: ${({ theme }) => theme.color.secondary};
  padding: .8rem;
`

const ProductName = styled.p`
  position: relative;
  top: -10px;
  background-color: ${({ theme }) => theme.color.secondary};
  padding: .8rem;
  margin: 1rem;
  margin-top: 0;
  transition: .3s;
  transform: translateX(-200px);
`

const Image = styled.img`
  width: 100%;
`

function Product({ price, name, image }) {
  return (
    <ProductContainer>
      <ImageContainer>
        <SmallDescritpion>
          <Price>{price}$</Price>
          <ProductName className="product-name">{name}</ProductName>
        </SmallDescritpion>
        <Image src={image} alt="my-img" />
      </ImageContainer>
    </ProductContainer>
  )
}

export default Product