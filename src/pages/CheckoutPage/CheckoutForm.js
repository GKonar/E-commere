import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Payment from './CheckoutForm/Payment';
import DeliveryDetails from './CheckoutForm/DeliveryDetails';
import PaymentSuccess from './PaymentSuccess';

import CustomButton from '../../components/CustomButton';

// HOOKS 
import useForm from '../../hooks/useForm';

//Validation
import { schema } from '../../validation/shippingFormSchema';

const Form = styled.form`
  align-items: center;
  padding: ${({ theme }) => theme.padding.medium};
  padding-top: ${({ theme }) => theme.padding.default};
`

const initialValues = {
  name: '',
  company: '',
  adresse: '',
  city: '',
  state: '',
  postal: 0,
  number: 0,
  email: '',
  cardNumber: 0,
  date: '',
  cardSecurityCode: 0
}

function submit() {
  return Promise.resolve('Sucessfully Submitted!').then((value) => console.log(value));
}

function ShippingForm() {
  const {
    submitSuccess,
    handleChange,
    handleSubmit,
    errors, // pull out errors from form - need this for validation message
    submitting,
  } = useForm(initialValues, submit, schema); // Add validation schema
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    handleSubmit(e) // DEV
    setPaymentSuccess(true); // DEV comment this line to validate form  [ in progress ]
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <DeliveryDetails
        errors={errors}
        handleChange={handleChange} />
      <Payment
        errors={errors}
        handleChange={handleChange} />
      {/* Submit Form Button */}
      <br />
      <CustomButton
        type='submit'
        isWorking={submitting}
        disabled={submitting}
      >
        Process My Order
      </CustomButton>

      {/* PAYMENT SUCCESS MODAL */}
      <PaymentSuccess
        paymentSuccess={paymentSuccess}
        setPaymentSuccess={setPaymentSuccess} />
    </Form>
  )
}

export default ShippingForm;