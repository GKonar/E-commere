import React, { useState } from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import H3 from '../../components/H3';
import CustomButton from '../../components/CustomButton';
import Snackbar from '../../components/Snackbar';

import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import dotGrid from '../../assets/images/dot-grid.png';

import { removeItem, incrementItemQuantity, decrementItemQuantity, setDiscount } from '../../store/actions/actions';

import BasketListItem from './BasketListItem';
import BasketHeader from './BasketHeader';
import NavigationButtons from './NavigationButtons';

const Container = styled.section`
  background-image: url(${dotGrid});
  padding: ${({ theme }) => theme.padding.medium};
  color: ${({ theme }) => theme.textColor.primary};
  height: 100%; /* DEV */
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

const BasketSummary = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.padding.medium};
  padding-top: ${({ theme }) => theme.padding.default};
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
`

const DiscountCodesForm = styled.form`
  display: flex;
  align-items: center;
`

const TextLabel = styled.label`
  font-size: ${({ theme }) => theme.textSize.default};
  font-weight: 600;
  width: 50%;
`

const SubmitButton = styled(CustomButton)`
  && {
    margin-left: ${({ theme }) => theme.margin.default};
    width: 30%;
  }
`

function BasketPage({
  toFreeDelivery,
  basketItems,
  onItemRemove,
  onDecrementItemQuantity,
  onIncrementItemQuantity,
  basketValue,
  onSetDiscount,
  numOfBasketItems,
  hasDiscount
}) {
  let discountCodes = ['relax', 'yougotthis', 'miakalifa', 'rokko']; // DEV gonna come oryginally from database

  const [inputValue, setInputValue] = useState('');
  const [inputState, setInputState] = useState('');
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleDiscount = (e) => {
    e.preventDefault();
    if (discountCodes.includes(inputValue)) {
      onSetDiscount(basketValue);
      setInputValue('');
      setInputState('disabled');
      setSnackbarOpen(true);
    } else {
      setInputState('error');
    }
  }

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
            <H3>subtotal {basketValue}$</H3>
          </Subtotal>
          <Divider />
          <BasketSummary>
            <SummaryWrapper>
              <Subtotal>
                <H3>grand total: {basketValue}$</H3>
              </Subtotal>
              <DiscountCodes>
                <DiscountCodesForm onSubmit={handleDiscount}>
                  <TextLabel htmlFor="dicscount-code" >
                    Discount code:
                  </TextLabel>
                  <TextField
                    onChange={handleChange}
                    value={inputValue}
                    id="discount-code"
                    variant="outlined"
                    error={inputState === 'error' ? true : false}
                    disabled={inputState === 'disabled' || numOfBasketItems === 0 ? true : false || hasDiscount}
                    placeholder={hasDiscount ? 'discount added' : 'provide code'}
                  />
                  <SubmitButton
                    disabled={inputState === 'disabled' || numOfBasketItems === 0 ? true : false || hasDiscount}
                    type="submit">
                    Use
                  </SubmitButton>
                </DiscountCodesForm>
              </DiscountCodes>
              <NavigationButtons />
            </SummaryWrapper>
          </BasketSummary>
          <Divider />
        </BasketItemsList>
      </BasketItemsContainer>
      {/* Snackbar component */}
      <Snackbar
        isSnackbarOpen={isSnackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        message={"You got discount!"}
        variant='success'
        time={2500}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage)
