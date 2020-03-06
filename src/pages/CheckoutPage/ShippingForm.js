import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import countryList from 'react-select-country-list';

import H1 from '../../components/H1';
import CustomButton from '../../components/CustomButton';
import H2 from '../../components/H2';

// HOOKS 
import useForm from '../../hooks/useForm';

// YUP validation
import * as yup from 'yup';

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

let schema = yup.object().shape({
  name: yup.string().required(),
  adresse: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  postal: yup.number().required(),
  number: yup.number().required().min(4),
  email: yup.string().email().required(),
});

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
    errors, // pull out errors from form
    submitting
  } = useForm(initialValues, submit); // Add validation schema

  // console.log('FORM VALUES: ', values)
  // console.log('FORM ERRORS: ', errors)

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
      </Field>
      <CityState>
        <Field>
          <TextField
            name="city"
            type="text"
            variant="outlined"
            label="City"
            onChange={handleChange} />
        </Field>
        <Field>
          <TextField
            name="state"
            type="text"
            variant="outlined"
            label="State"
            onChange={handleChange} />
        </Field>
      </CityState>
      <Field>
        <TextField
          name="postal"
          type="number"
          variant="outlined"
          label="Postal/Zip-code"
          onChange={handleChange} />
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
      </Field>
      <Field>
        <TextField
          name="email"
          type="email"
          variant="outlined"
          label="E-mail"
          onChange={handleChange} />
      </Field>
      <CustomButton
        type='submit'
        isWorking={submitting}
        disabled={submitting}
      >
        Submit
      </CustomButton>
    </Form>
  )
}

export default ShippingForm
