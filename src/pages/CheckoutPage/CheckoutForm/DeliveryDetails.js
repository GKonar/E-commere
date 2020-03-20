import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import countryList from 'react-select-country-list';

import H2 from '../../../components/H2';
import CredentialsError from '../../../components/CredentialsError';

//Validation
import { Divider } from '@material-ui/core';

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

const CityState = styled.div`
  display: flex;
  justify-content: space-around;
`

const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 22px 0;
  position: relative;
`

const InnerField = styled.div`
  display: flex;
  margin: 0;
`

function CredentialsForm({ errors, handleChange }) {
  // Country list select
  const options = countryList().getData();
  const [country, setCountry] = useState(null);

  const changeCountry = value => {
    setCountry(value);
  }

  return (
    <>
      <H2>2. Who You Are</H2>
      <Divider />
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
        <InnerField>
          <TextField
            name="city"
            type="text"
            variant="outlined"
            label="City"
            onChange={handleChange} />
          <CredentialsError>{errors.city ? errors.city : ''}</CredentialsError>
        </InnerField>
        <InnerField>
          <TextField
            name="state"
            type="text"
            variant="outlined"
            label="State"
            onChange={handleChange} />
          <CredentialsError>{errors.state ? errors.state : ''}</CredentialsError>
        </InnerField>
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
    </>
  )
}

export default CredentialsForm
