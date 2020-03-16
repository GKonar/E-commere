import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import H3 from '../../components/H3';

import Divider from '@material-ui/core/Divider';

import dotGrid from '../../assets/images/dot-grid.png';

import { removeItem, incrementItemQuantity, decrementItemQuantity, setDiscount } from '../../store/actions/actions';

import { sizes } from '../../helpers/sizes';


import BasketListItem from './BasketListItem';
import BasketHeader from './BasketHeader';
import NavigationButtons from './NavigationButtons';
import DiscountCodesForm from './DiscountCodesForm';

const Container = styled.section`
  background-image: url(${dotGrid});
  padding: ${({ theme }) => theme.padding.medium};
  color: ${({ theme }) => theme.textColor.primary};
  height: 100%; /* DEV */
  overflow: hidden;
    a {
      color: inherit;
      text-decoration: none;
      width: 100%;
      height: 100%;
    } 

    ${sizes.tablet} {
      width: 100%;
      overflow: hidden;
      padding-left: ${({ theme }) => theme.padding.small};
      padding-right: ${({ theme }) => theme.padding.small};
    }
    
    ${sizes.mobileM} {
      padding: ${({ theme }) => theme.padding.default} 0;
    }
`

const BasketItemsContainer = styled.div``

const BasketItemsList = styled.ul`
  padding: ${({ theme }) => theme.padding.medium};

  ${sizes.tablet} {
    padding-left: ${({ theme }) => theme.padding.small};
    padding-right: ${({ theme }) => theme.padding.small};
  }
`

const ItemListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.medium};
  background-color: ${({ theme }) => theme.color.white};

  ${sizes.tablet} {
    padding-left: ${({ theme }) => theme.padding.small};
    padding-right: ${({ theme }) => theme.padding.small};
  }
  
  ${sizes.mobileM} {
    padding: ${({ theme }) => theme.padding.default};
  }
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

  ${sizes.mobileM} {
    padding: ${({ theme }) => theme.padding.default};
  }
`

const BasketSummary = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.padding.medium};
  padding-top: ${({ theme }) => theme.padding.default};

  ${sizes.mobileL} {
    padding: ${({ theme }) => theme.padding.small};
  }
`

const SummaryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const DiscountCodes = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.padding.medium} 0;
  padding-bottom: 0;
  margin-right: ${({ theme }) => theme.padding.medium};
  margin-bottom: ${({ theme }) => theme.padding.medium};

  ${sizes.laptopS} {
    width: 100%;
    margin: 0;
    padding: ${({ theme }) => theme.padding.small} 0;
  }
`

function BasketPage({
  toFreeDelivery,
  basketItems,
  onItemRemove,
  onDecrementItemQuantity,
  onIncrementItemQuantity,
  basketValue,
  numOfBasketItems,
}) {

  return (
    <Container>
      <BasketHeader toFreeDelivery={toFreeDelivery} />
      <BasketItemsContainer>
        <BasketItemsList>
          <Divider />
          {basketItems.length !== 0 ? (
            <ItemListHeader>
              <HeaderH3>item description</HeaderH3>
              <HeaderH3>price</HeaderH3>
            </ItemListHeader>
          ) : (
              <ItemListHeader>
                <HeaderH3>no items</HeaderH3>
              </ItemListHeader>
            )}
          {basketItems.length === 0 ? <Divider /> : null}
          {basketItems.map(item => {
            return (
              <BasketListItem
                key={item.id}
                item={item}
                onItemRemove={onItemRemove}
                increment={onIncrementItemQuantity}
                decrement={onDecrementItemQuantity}
                toFreeDelivery={toFreeDelivery}
              />
            )
          })}
          <Subtotal>
            <H3>subtotal {Math.round(basketValue)}$</H3>
          </Subtotal>
          <Divider />
          <BasketSummary>
            <SummaryWrapper>
              <Subtotal>
                <H3>grand total: {Math.round(basketValue)}$</H3>
              </Subtotal>
              <DiscountCodes>
                <DiscountCodesForm />
              </DiscountCodes>
              <NavigationButtons numOfBasketItems={numOfBasketItems} />
            </SummaryWrapper>
          </BasketSummary>
          <Divider />
        </BasketItemsList>
      </BasketItemsContainer>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    toFreeDelivery: state.toFreeDelivery,
    basketItems: state.basketItems,
    numOfBasketItems: state.numOfBasketItems,
    basketValue: state.basketValue,
    hasDiscount: state.hasDiscount
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onItemRemove: (item) => dispatch(removeItem(item)),
    onIncrementItemQuantity: (item) => dispatch(incrementItemQuantity(item)),
    onDecrementItemQuantity: (item) => dispatch(decrementItemQuantity(item)),
    onSetDiscount: (basketValue) => dispatch(setDiscount(basketValue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
