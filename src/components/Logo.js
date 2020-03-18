import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

const Container = styled.span`
  font-weight: 600;
  margin-left: ${({ theme }) => theme.margin.medium};
  z-index: 10;
  a {
    display:flex; 
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`

const LogoText = styled.span`
  margin-right: 2px;
  letter-spacing: 1px;
`

function Logo() {
  return (
    <Container>
      <Link to='/'>
        <LogoText>hand</LogoText>
        <Icon icon={'WOOL'} color='#F59486' size={30} />
        <LogoText>crafted</LogoText>
      </Link>
    </Container>
  )
}

export default Logo
