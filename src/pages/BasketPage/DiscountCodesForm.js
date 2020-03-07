import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import CustomButton from '../../components/CustomButton';
import Tooltip from '../../components/Tooltip';
import Snackbar from '../../components/Snackbar';

import TextField from '@material-ui/core/TextField';

// REDUX
import { removeItem, incrementItemQuantity, decrementItemQuantity, setDiscount } from '../../store/actions/actions';

const DiscountForm = styled.form`
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

function DiscountCodesForm({
  basketValue,
  onSetDiscount,
  numOfBasketItems,
  hasDiscount
}) {
  let discountCodes = ['relax', 'yougotthis', 'miakalifa', 'brunoise']; // DEV gonna come oryginally from database

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
    <DiscountForm onSubmit={handleDiscount}>
      <TextLabel htmlFor="dicscount-code" >
        Discount code:
      </TextLabel>
      <Tooltip>
        <TextField
          onChange={handleChange}
          value={inputValue}
          id="discount-code"
          variant="outlined"
          error={inputState === 'error' ? true : false}
          disabled={inputState === 'disabled' || numOfBasketItems === 0 ? true : false || hasDiscount}
          placeholder={hasDiscount ? 'discount added' : 'provide code'}
        />
      </Tooltip>
      <Tooltip>
        <span>
          <SubmitButton
            disabled={inputState === 'disabled' || numOfBasketItems === 0 ? true : false || hasDiscount}
            type="submit">
            Use
          </SubmitButton>
        </span>
      </Tooltip>
      {/* Snackbar component */}
      <Snackbar
        isSnackbarOpen={isSnackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        message={"You got discount!"}
        variant='success'
        time={2500}
      />
    </DiscountForm>
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

export default connect(mapStateToProps, mapDispatchToProps)(DiscountCodesForm)
