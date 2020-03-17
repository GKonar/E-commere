import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';

import CustomButton from '../../components/CustomButton';
import ExpensionPanel from './ExpansionPanel';
import ImageDialog from './ImageDialog';
import H1 from '../../components/H1';
import H3 from '../../components/H3';
import Snackbar from '../../components/Snackbar';
import Tooltip from '../../components/Tooltip';

import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

import dotGrid from '../../assets/images/dot-grid.png';

//REDUX 
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/actions';

import { sizes } from '../../helpers/sizes';

const SectionContainer = styled.section`
  color: ${({ theme }) => theme.textColor.primary};
  background-image: url(${dotGrid});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  ${sizes.laptopM} {
    margin-bottom: ${({ theme }) => theme.margin.medium};
  }
`

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  min-height: calc(100vh - 90px);
  background-color: ${({ theme }) => theme.color.white};

  ${sizes.laptopM} {
    flex-direction: column;
    width: 85%;
    overflow: hidden;
  }
`

const ImagesContainer = styled.div`
  max-height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 50%;
  cursor: pointer;

  ::-webkit-scrollbar {
    width: 7px;
  }
 
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
 
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.main};;
    outline: 1px solid slategrey;
    border-radius: 5px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ${sizes.laptopM} {
    width: 100%;
    margin: ${({ theme }) => theme.margin.default};
  }
`

const Image = styled.img`
  width: 100%; 
  padding: 1rem 0;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`

const DescriptionContainer = styled.div`
  width: 50%;
  padding: 0 4rem;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  ${sizes.laptopM} {
    width: 100%;
  }
`

const IconsContainer = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-around;

  /* ${sizes.laptopS} {
    padding: .5rem 0;
  } */
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
  
  ${sizes.laptopS} {
    font-size: ${({ theme }) => theme.textSize.tiny};
    width: 100px;
  }
  
  ${sizes.mobileS} {
    font-size: ${({ theme }) => theme.textSize.tiny};
    width: 80px;
  }
`

function ProductPage(props) {
  // let product = props.products.find(product => product.id === props.match.params.id);
  let product = { // DEV
    name: 'Wallet',
    price: 140,
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279992/Handcrafted/for-him/wallet/wallet2_yjqtmn.png',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279992/Handcrafted/for-him/wallet/wallet1_pagtsp.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279992/Handcrafted/for-him/wallet/wallet3_goywci.jpg'],
    description: 'Wallet Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true,
    qty: 1
  }
  const [toggle, setToggle] = useState(false);
  const [dialogImage, setDialogImage] = useState('');
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const handleAddItem = () => {
    props.onAddItem(product);
    setSnackbarOpen(true);
  }

  return (
    <SectionContainer>
      {
        product !== undefined ? (
          <ProductContainer>
            <ImagesContainer>
              {
                product.images.map((image) => {
                  return (
                    <Image
                      key={uuid()}
                      onClick={() => {
                        setToggle(!toggle)
                        setDialogImage(image)
                      }}
                      src={image} alt={product.name} />
                  )
                })
              }
            </ImagesContainer>
            <ImageDialog toggle={toggle} setToggle={setToggle} imageSrc={dialogImage} />
            <DescriptionContainer>
              <div>
                <H1>{product.name}</H1>
                <H3>{product.price}$</H3>
              </div>
              <ExpensionPanel product={product} />
              <IconsContainer>
                <IconWrapper>
                  <AssignmentReturnIcon style={{ fontSize: 60 }} />
                  <IconDescripton>Free shipping from 150$</IconDescripton>
                </IconWrapper>
                <IconWrapper>
                  <LocalShippingIcon style={{ fontSize: 60 }} />
                  <IconDescripton>365 days to change Your mind</IconDescripton>
                </IconWrapper>
                <IconWrapper>
                  <EmojiTransportationIcon style={{ fontSize: 60 }} />
                  <IconDescripton>Free curbside pick up for You</IconDescripton>
                </IconWrapper>
              </IconsContainer>
              <CustomButton onClick={handleAddItem}>Add to basket</CustomButton>
            </DescriptionContainer>
            <Snackbar
              isSnackbarOpen={isSnackbarOpen}
              setSnackbarOpen={setSnackbarOpen}
              message={"Item Added"}
              variant='success'
              time={500}
            />
          </ProductContainer>
        ) : null // Set ridirecting link to hompage TODO
      }
    </SectionContainer>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (item) => dispatch(addItem(item))
  }
}

export default connect(null, mapDispatchToProps)(ProductPage)
