import React from 'react'
import BasketSelects from './BasketSelects';

import styled from 'styled-components';

import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Fab from '@material-ui/core/Fab';


const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.medium};
  background-color: ${({ theme }) => theme.color.white};
`

const LeftSideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImageContainer = styled.div`
  width: 150px;
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
`

const ItemPrice = styled.div`
  font-weight: 600;
  font-size: ${({ theme }) => theme.textSize.big};
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
`

const QuantityWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.padding.default} 0;
`

const Quantity = styled.span`
  padding:${({ theme }) => theme.padding.small};
  font-size: ${({ theme }) => theme.textSize.medium};
  font-weight: 500;
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
              <Decrement onClick={() => decrement(item)} size="small" aria-label="remove">
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
        <ItemPrice>{item.price}</ItemPrice>
      </ListItem>
      <Divider />
    </div>
  )
}

export default BasketListItem
