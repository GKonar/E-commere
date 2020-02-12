import React from 'react'
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';

import Icon from './Icon';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  /* background-color: ${({ theme }) => theme.color.section}; */
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.textColor.primary};
  box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.75);
  transition: all .2s;

  &:hover {
    /* background-color: ${({ theme }) => theme.color.section}; */
    box-shadow: 0px -1px 6px 0px rgba(0,0,0,0.75);
  }
`

const List = styled.ul`
  display: flex;  
  position: relative; 
  margin: ${({ theme }) => theme.margin.small};
`

const ListItem = styled.li`
  list-style: none;
  margin:  ${({ theme }) => theme.margin.default}; 
  position: relative;
  font-weight: 400;
  font-size: ${({ theme }) => theme.textSize.readable};
  
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
  display:flex; 
  justify-content: center;
  align-items: center;
`

const LogoText = styled.span`
  /* margin-right: ${({ theme }) => theme.margin.small}; */
  margin-right: 2px;
  letter-spacing: 1px;
`

const Basket = styled.span`
  margin: 0 3rem 0 auto;;
`

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function Navbar() {
  return (
    <Nav>
      <Logo>
        <LogoText>hand</LogoText><Icon icon={'WOOL'} color='#e55039' size={30} /> <LogoText>crafted</LogoText>
      </Logo>
      <List>
        <ListItem>For Him</ListItem>
        <ListItem>For Her</ListItem>
        <ListItem>For Kids</ListItem>
        <ListItem>For Home</ListItem>
        <ListItem>Shop</ListItem>
        <ListItem>Contact</ListItem>
        <ListItem>About</ListItem>
      </List>
      <Basket>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={7} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Basket>
    </Nav>
  )
}

export default Navbar
