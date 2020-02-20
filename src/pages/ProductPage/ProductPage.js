import React from 'react';
import styled from 'styled-components';

import CustomButton from '../../components/CustomButton';
import ExpensionPanel from '../../components/ExpansionPanel';

import Divider from '@material-ui/core/Divider';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
// curbside pick up 
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

const SectionContainer = styled.section`
  color: ${({ theme }) => theme.textColor.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
`

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  min-height: calc(100vh - 66px);
`

const ImagesContainer = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 50%;
`

const Image = styled.img`
  padding: 1rem 0;
  width: 100%; 
`

const DescriptionContainer = styled.div`
  width: 50%;
  padding: 0 4rem;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.h1`
  color: #F59486;
`

const IconsContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
`

function ProductPage(props) {
  let product = props.products.find(product => product.id === props.match.params.id);

  return (
    <SectionContainer>
      <ProductContainer>
        <ImagesContainer>
          {/* DEV */}
          <Image src={product.image} alt='dupa' />
          <Image src={product.image} alt='dupa' />
        </ImagesContainer>
        <DescriptionContainer>
          <div>
            <ProductName>{product.name}</ProductName>
            <h2>{product.price}</h2>
          </div>
          <Divider light variant="middle" />
          <ExpensionPanel product={product} />
          <IconsContainer>

            <AssignmentReturnIcon style={{ fontSize: 50 }} />
            <LocalShippingIcon style={{ fontSize: 50 }} />
            <EmojiTransportationIcon style={{ fontSize: 50 }} />
          </IconsContainer>
          <CustomButton>Add to basket</CustomButton>
        </DescriptionContainer>
      </ProductContainer>
    </SectionContainer>
  )
}

export default ProductPage
