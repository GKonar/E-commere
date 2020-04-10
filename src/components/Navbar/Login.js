import React from 'react'
import { ReactComponent as LoginIcon } from '../../assets/svg/login.svg';

// REDUX
import { connect } from 'react-redux';

// SVG Components
import styled from 'styled-components';

const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  margin: ${({ theme }) => theme.margin.small};
  transition: .2s;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

function Login({ loggedIn }) {
  console.log('LOGGED IN: ', loggedIn);
  return (
    <IconWrapper style={{ backgroundColor: loggedIn ? "#b8e994" : "#FFF" }}>
      <LoginIcon />
    </IconWrapper>

  )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Login);
