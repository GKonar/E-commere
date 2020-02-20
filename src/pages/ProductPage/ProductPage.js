import React from 'react';
import styled from 'styled-components';

import CustomButton from '../../components/CustomButton';
import ExpensionPanel from '../../components/ExpansionPanel';

import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

import dotGrid from '../../assets/images/dot-grid.png';


const SectionContainer = styled.section`
  color: ${({ theme }) => theme.textColor.primary};
  background-image: url(${dotGrid});
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
  background-color: ${({ theme }) => theme.color.white};
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

const IconsContainer = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-around;
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IconDescripton = styled.p`
  width: 120px;
  text-align: center;
  font-size: ${({ theme }) => theme.textSize.secondary};
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
            <H1>{product.name}</H1>
            <H3>{product.price}</H3>
          </div>
          <ExpensionPanel product={product} />
          <IconsContainer>
            <IconWrapper>
              <AssignmentReturnIcon style={{ fontSize: 60 }} />
              <IconDescripton>Free shipping from 100$</IconDescripton>
            </IconWrapper>
            <IconWrapper>
              <LocalShippingIcon style={{ fontSize: 60 }} />
              <IconDescripton>365 days to change Your mind</IconDescripton>
            </IconWrapper>
            <IconWrapper>
              <EmojiTransportationIcon style={{ fontSize: 60 }} />
              <IconDescripton>Free curbside pick up </IconDescripton>
            </IconWrapper>
          </IconsContainer>
          <CustomButton>Add to basket</CustomButton>
        </DescriptionContainer>
      </ProductContainer>
    </SectionContainer>
  )
}

export default ProductPage
