import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import countryList from 'react-select-country-list';

import H1 from '../../components/H1';
import CustomButton from '../../components/CustomButton';
import H2 from '../../components/H2';
import { ButtonStyled } from '../../components/CustomButton';
import CredentialsError from '../../components/CredentialsError';

// HOOKS 
import useForm from '../../hooks/useForm';

//Validation
import { schema } from '../../validation/shippingFormShema';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#F59486' : '#2f3542',
    backgroundColor: state.isSelected ? '#2f3542' : 'white',
    padding: 20,
    cursor: 'pointer'
  }),
  control: () => ({
    width: "99.5%",
    border: '1px solid #F59486',
    borderRadius: '5px'
  }),
  singleValue: (provided, state) => {
    const fontWeight = "500"

    return { ...provided, fontWeight };
  },
  placeholder: () => ({
    color: '#2f3542',
    fontWeight: 500
  }),
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.padding.default};
`

const CityState = styled.div`
  display: flex;

`
const Field = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: ${({ theme }) => theme.margin.regular};
position: relative;
`

const initialValues = {
  name: '',
  company: '',
  adresse: '',
  city: '',
  state: '',
  postal: 0,
  number: 0,
  email: ''
}

const Submit = styled(ButtonStyled)`
  && {
    color: ${({ theme }) => theme.textColor.secondary};
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid #2f3542;
    width:80%;
    &:hover {
      background-color: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.textColor.primary};
    }
  }
`

function submit() {
  return Promise.resolve('Sucessfully Submitted!').then((value) => console.log(value));
}

function ShippingForm() {
  // Country list select
  const options = countryList().getData();
  const [country, setCountry] = useState(null);
  const {
    values,
    handleChange,
    handleSubmit,
    errors, // pull out errors from form - need this for validation message
    submitting
  } = useForm(initialValues, submit, schema); // Add validation schema

  console.log('FORM ERRORS: ', errors);
  const changeCountry = value => {
    setCountry(value);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <H2>Who You Are</H2>
      <Field>
        <TextField
          name="name"
          type="text"
          variant="outlined"
          label="Your Name"
          onChange={handleChange} />
        <CredentialsError>{errors.name ? errors.name : ''}</CredentialsError>
      </Field>
      <Field>
        <TextField
          name="company"
          type="text"
          variant="outlined"
          label="Company Name"
          onChange={handleChange} />
      </Field>
      <Field>
        <TextField
          name="adresse"
          type="text"
          variant="outlined"
          label="Adresse"
          onChange={handleChange} />
        <CredentialsError>{errors.adresse ? errors.adresse : ''}</CredentialsError>
      </Field>
      <CityState>
        <Field>
          <TextField
            name="city"
            type="text"
            variant="outlined"
            label="City"
            onChange={handleChange} />
          <CredentialsError>{errors.city ? errors.city : ''}</CredentialsError>
        </Field>
        <Field>
          <TextField
            name="state"
            type="text"
            variant="outlined"
            label="State"
            onChange={handleChange} />
          <CredentialsError>{errors.state ? errors.state : ''}</CredentialsError>
        </Field>
      </CityState>
      <Field>
        <TextField
          name="postal"
          type="text"
          variant="outlined"
          label="Postal/Zip-code"
          onChange={handleChange} />
        <CredentialsError>{errors.postal ? errors.postal : ''}</CredentialsError>
      </Field>
      <Field>
        <Select
          styles={customStyles}
          placeholder="Select Country"
          options={options}
          value={country}
          onChange={changeCountry}
        />
      </Field>
      <Field>
        <TextField
          name="number"
          type="text"
          variant="outlined"
          label="Phone"
          onChange={handleChange} />
        <CredentialsError>{errors.number ? errors.number : ''}</CredentialsError>
      </Field>
      <Field>
        <TextField
          name="email"
          type="email"
          variant="outlined"
          label="E-mail"
          onChange={handleChange} />
        <CredentialsError>{errors.email ? errors.email : ''}</CredentialsError>
      </Field>
      <Submit
        type='submit'
        isWorking={submitting}
        disabled={submitting}
      >
        Submit
      </Submit>
    </Form>
  )
}

export default ShippingForm
