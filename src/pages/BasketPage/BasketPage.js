import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import H3 from '../../components/H3';

import Divider from '@material-ui/core/Divider';

import dotGrid from '../../assets/images/dot-grid.png';

import { removeItem, incrementItemQuantity, decrementItemQuantity } from '../../store/actions/actions';

import BasketListItem from './BasketListItem';
import BasketHeader from './BasketHeader';

const Container = styled.section`
  background-image: url(${dotGrid});
  padding: ${({ theme }) => theme.padding.medium};
  color: ${({ theme }) => theme.textColor.primary};
  height: 100vh; /* DEV */
    a {
      color: inherit;
      text-decoration: none;
      width: 100%;
      height: 100%;
    } 
`

const BasketItemsContainer = styled.div``

const BasketItemsList = styled.ul`
  padding: ${({ theme }) => theme.padding.medium};
`

const ItemListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.medium};
  background-color: ${({ theme }) => theme.color.white};
`

const HeaderH3 = styled(H3)`
  && {
    margin: 0
  }
`

const Subtotal = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.padding.medium};
  display: flex;
  justify-content: flex-end;
  h3 {
    margin: 0;
  }
`

function BasketPage({
  toFreeDelivery,
  basketItems,
  onItemRemove,
  onDecrementItemQuantity,
  onIncrementItemQuantity
  basketValue
}) {
  console.log('BASKET ITEMS: ', basketItems.length); // DEV
  return (
    <Container>
      <BasketHeader toFreeDelivery={toFreeDelivery} />
      <BasketItemsContainer>
        <BasketItemsList>
          <Divider />
          <ItemListHeader>
            <HeaderH3>item description</HeaderH3>
            <HeaderH3>price</HeaderH3>
          </ItemListHeader>
          {
            basketItems.length === 0 ? <Divider /> : null
          }
          {
            basketItems.map(item => {
              return (
                <BasketListItem
                  key={item.id}
                  item={item}
                  onItemRemove={onItemRemove}
                  increment={onIncrementItemQuantity}
                  decrement={onDecrementItemQuantity}
                />
              )
            })
          }
          <Subtotal>
            <H3>subtotal {basketValue}$</H3>
          </Subtotal>
        </BasketItemsList>
      </BasketItemsContainer>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    toFreeDelivery: state.toFreeDelivery,
    basketItems: state.basketItems,
    basketValue: state.basketValue
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onItemRemove: (item) => dispatch(removeItem(item)),
    onIncrementItemQuantity: (item) => dispatch(incrementItemQuantity(item)),
    onDecrementItemQuantity: (item) => dispatch(decrementItemQuantity(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage)
