import React, { useState } from 'react'
import styled from 'styled-components';

import H2 from '../../../components/H2';
import CredentialsError from '../../../components/CredentialsError';

import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import { Divider } from '@material-ui/core';

// SVG Components
import { ReactComponent as Visa } from '../../../assets/payment/visa.svg';
import { ReactComponent as MasterCard } from '../../../assets/payment/mastercard.svg';
import { ReactComponent as Maestro } from '../../../assets/payment/maestro.svg';
import { ReactComponent as Jcb } from '../../../assets/payment/jcb.svg';
import { ReactComponent as Hipercard } from '../../../assets/payment/hipercard.svg';
import { ReactComponent as PayPal } from '../../../assets/payment/paypal.svg';
import { ReactComponent as Code } from '../../../assets/payment/code.svg';

import { sizes } from '../../../helpers/sizes';

const PaymentMethods = styled.div`
  display: flex;
  align-items: center;

  ${sizes.mobileL} {
    flex-direction: column;
    align-items: flex-start;
  }
`

const SvgContainer = styled.div`
  width: 20px;
  margin: .5rem .6rem;
  margin-bottom: .3rem;
  svg {
    margin: ${({ theme }) => theme.margin.related};
    width: 35px;
    height: 35px;
  }
`

const Cards = styled.div`
  display: flex;
  margin-right: ${({ theme }) => theme.margin.default}; 
`

const Other = styled.div`
  display: flex;
  align-items: center;
`

const Field = styled.div`
  width: 100%;  
  display: flex;
  flex-direction: column;
  margin: 22px 0;
  position: relative;
`

const SecurityCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const InnerField = styled.div`
margin: 0;
width: 100%;
display: flex;
flex-direction: column;
`

const CodeSvg = styled.div`
  width: 100px;
  display: flex;
    svg {
      width: 100%;
      height: 100%;
    }
`

function PaymentForm({ errors, handleChange }) {
  const [selectedValue, setSelectedValue] = useState('card');

  const handleRadio = (event) => {
    setSelectedValue(event.target.value);
  }

  return (
    <>
      <H2>3. How You'll Pay</H2>
      <Divider />
      <PaymentMethods>
        <Cards>
          <Radio
            checked={selectedValue === 'card'}
            onChange={handleRadio}
            value="card"
            name="card"
            color="primary"
          />
          <SvgContainer>
            <Visa />
          </SvgContainer>
          <SvgContainer>
            <MasterCard />
          </SvgContainer>
          <SvgContainer>
            <Maestro />
          </SvgContainer>
          <SvgContainer>
            <Jcb />
          </SvgContainer>
          <SvgContainer>
            <Hipercard />
          </SvgContainer>
        </Cards>
        <Other>
          <Radio
            checked={selectedValue === 'other'}
            onChange={handleRadio}
            value="other"
            color="primary"
            name="other"
          />
          <SvgContainer>
            <PayPal />
          </SvgContainer>
        </Other>
      </PaymentMethods>
      <Field>
        <TextField
          name="cardNumber"
          type="text"
          variant="outlined"
          label="Card number"
          onChange={handleChange} />
        <CredentialsError>{errors.cardNumber ? errors.cardNumber : ''}</CredentialsError>
      </Field>
      <Field>
        <TextField
          name="date"
          id="date"
          label="Expiration Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleChange}
        />
        <CredentialsError>{errors.date ? errors.date : ''}</CredentialsError>
      </Field>
      <SecurityCode>
        <InnerField>
          <TextField
            name="cardSecurityCode"
            type="text"
            variant="outlined"
            label="Card Security Code"
            onChange={handleChange} />
          <CredentialsError>{errors.cardSecurityCode ? errors.cardSecurityCode : ''}</CredentialsError>
        </InnerField>
        <CodeSvg>
          <Code />
        </CodeSvg>
      </SecurityCode>
    </>
  )
}

export default PaymentForm;
