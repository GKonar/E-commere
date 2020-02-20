import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Icon from './Icon';
import Basket from './Basket';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.textColor.primary};
  transition: all .2s;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
`

const List = styled.ul`
  display: flex;  
  position: relative; 
  margin: ${({ theme }) => theme.margin.default};
`

const ListItem = styled.li`
  list-style: none;
  margin:  ${({ theme }) => theme.margin.default}; 
  position: relative;
  font-weight: 500;
  font-size: ${({ theme }) => theme.textSize.readable};
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  &::after {
    content: "";
    display: flex;
    background-color: ${({ theme }) => theme.textColor.primary};
    width: 100%;
    height: 1px;
    position: absolute;
    top: 110%;
    transform: scale(0);
    z-index: 1;
    transition: all .1s;
  }

  &:hover {
    cursor: pointer;
    &::after {
      transform: scale(1);
    }
  }
`

const Logo = styled.span`
  font-weight: 600;
  margin-left: ${({ theme }) => theme.margin.medium};

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

function Navbar() {
  return (
    <Nav>
      <Logo>
        <Link to='/'>
          <LogoText>hand</LogoText>
          <Icon icon={'WOOL'} color='#F59486' size={30} />
          <LogoText>crafted</LogoText>
        </Link>
      </Logo>
      <List>
        <ListItem><Link to="/for-him">For Him</Link></ListItem>
        <ListItem><Link to="/for-her">For Her</Link></ListItem>
        <ListItem><Link to="/for-home">For Home</Link></ListItem>
        <ListItem><Link to="/toys">Toys</Link></ListItem>
        <ListItem><Link to="/shop">Shop</Link></ListItem>
        <ListItem><Link to="/contact">Contact</Link></ListItem>
        <ListItem><Link to="/about">About</Link></ListItem>
      </List>
      <Basket />
    </Nav>
  )
}

export default Navbar
