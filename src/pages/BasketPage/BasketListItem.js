import React from 'react'
import BasketSelects from './BasketSelects';

import styled from 'styled-components';

import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Fab from '@material-ui/core/Fab';

import { sizes } from '../../helpers/sizes';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.medium};
  background-color: ${({ theme }) => theme.color.white};

  ${sizes.tablet} {
    padding: ${({ theme }) => theme.padding.default};
    padding-left: ${({ theme }) => theme.padding.small};
    padding-right: ${({ theme }) => theme.padding.small};
    align-items: center;
  }
  
  ${sizes.mobileM} {
    padding: ${({ theme }) => theme.padding.small} 0;
  }
`

const LeftSideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImageContainer = styled.div`
  width: 150px;

  ${sizes.tablet} {
    width: 100px;
  }
  
  ${sizes.mobileL} {
    width: 80px;
  }
`

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`

const ItemName = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.textSize.big};
  padding-top: ${({ theme }) => theme.padding.small};
  padding-bottom: 12px;

  ${sizes.tablet} {
    font-size: ${({ theme }) => theme.textSize.medium};
    padding-top: ${({ theme }) => theme.padding.small};
    padding-bottom: ${({ theme }) => theme.padding.small};
  }
`

const ItemPrice = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.textSize.big};

  ${sizes.mobileM} {
    font-size: ${({ theme }) => theme.textSize.medium};
  }
`
const RemoveItemBtn = styled.span`
  cursor: pointer;
  padding: ${({ theme }) => theme.padding.small};
  padding-left: 0;
`

const DescriptonContainer = styled.div`
  color: ${({ theme }) => theme.textColor.primary};
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: ${({ theme }) => theme.padding.large};

  ${sizes.tablet} {
    padding-left: ${({ theme }) => theme.padding.medium};
    align-items: center;
  }
  
  ${sizes.mobileM} {
    padding-left: ${({ theme }) => theme.padding.default};
    align-items: center;
  }
`

const QuantityWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.padding.default} 0;

  ${sizes.tablet} {
    padding: 0;
  }
`

const Quantity = styled.span`
  padding:${({ theme }) => theme.padding.small};
  font-size: ${({ theme }) => theme.textSize.medium};
  font-weight: 500;

  ${sizes.mobileM} {
    font-size: ${({ theme }) => theme.textSize.default};
    display: flex;
    align-items: center;
  }
`

const Increment = styled(Fab)`
  && {
    color: ${({ theme }) => theme.color.main};
    background-color: ${({ theme }) => theme.color.white};
    border: 2px solid #F59486;

    &:hover {
      background-color: ${({ theme }) => theme.color.main};
      color: ${({ theme }) => theme.color.white};
    }
  }
`

const Decrement = styled(Fab)`
  && {
    color: ${({ theme }) => theme.textColor.white};
    background-color: ${({ theme }) => theme.color.primary};
    &:hover {
      background-color: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.textColor.primary};
      border: 2px solid #2f3542;
    }
  }
`

function BasketListItem({ item, onItemRemove, increment, decrement }) {
  return (
    <div>
      <Divider />
      <ListItem >
        <LeftSideWrapper>
          <ImageContainer>
            <ItemImage src={item.images[0]} alt="test" />
          </ImageContainer>
          <DescriptonContainer>
            <ItemName>{item.name}</ItemName>
            <QuantityWrapper>
              <Decrement disabled={item.qty <= 1 ? true : false} onClick={() => decrement(item)} size="small" aria-label="remove">
                <RemoveIcon />
              </Decrement>
              <Quantity>Qty: {item.qty}</Quantity>
              <Increment onClick={() => increment(item)} size="small" aria-label="add">
                <AddIcon />
              </Increment>
            </QuantityWrapper>
            <BasketSelects item={item} />
            <RemoveItemBtn onClick={() => onItemRemove(item)}>
              <HighlightOffIcon fontSize="small" />
            </RemoveItemBtn>
          </DescriptonContainer>
        </LeftSideWrapper>
        <ItemPrice>{item.price}$</ItemPrice>
      </ListItem>
      <Divider />
    </div>
  )
}

export default BasketListItem
