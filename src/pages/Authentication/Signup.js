import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import CustomButton from '../../components/CustomButton';
import H2 from '../../components/H2';
import CredentialsError from '../../components/CredentialsError';

import useForm from '../../hooks/useForm';
import dotGrid from '../../assets/images/dot-grid.png';

import { schema } from '../../validation/authFormSchema';
import { checkSignupAuthErrors } from '../../validation/checkAuthErrors';

import { auth } from '../../store/actions/actions';

const Container = styled.div`
  background-image: url(${dotGrid});
  margin: 0 auto;
  margin-top: -83px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.padding.medium} ${({ theme }) => theme.padding.small};
`

const Form = styled.form`
  min-width: 300px;
  padding: ${({ theme }) => theme.padding.medium};
  padding-top: ${({ theme }) => theme.padding.default};
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
`

const initialValues = {
  email: '',
  password: ''
}

function Signup({ onAuth, loading, authError }) {
  const submit = () => {
    onAuth(values.email, values.password, 'signup');
  };

  const {
    handleChange,
    handleSubmit,
    errors,
    values,
  } = useForm(initialValues, submit, schema); // Add validation schema

  checkSignupAuthErrors(authError, errors);

  return (
    <Container>
      <Paper elevation={3}>
        <FormWrapper>
          <H2>Sign-up</H2>
          <Form onSubmit={handleSubmit}>
            <Field>
              <TextField
                name="email"
                type="email"
                variant="outlined"
                label="Your Email"
                onChange={handleChange} />
              <CredentialsError>{errors.email ? errors.email : ''}</CredentialsError>
            </Field>
            <Field>
              <TextField
                name="password"
                type="password"
                variant="outlined"
                label="Password"
                onChange={handleChange} />
              <CredentialsError>{errors.password ? errors.password : ''}</CredentialsError>
            </Field>
            <CustomButton
              type='submit'
              isWorking={loading}
              disabled={loading}
            >
              submit
        </CustomButton>
          </Form>
        </FormWrapper>
        <p>Already get account ?<Link to="/auth/login"> Log-in now</Link></p>
      </Paper>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    authError: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, mode) => dispatch(auth(email, password, mode))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
